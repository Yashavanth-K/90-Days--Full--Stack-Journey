const noteInput = document.getElementById("noteInput");
const addNoteBtn = document.getElementById("addNoteBtn");
const notesContainer = document.getElementById("notesContainer");
const notesCounter = document.getElementById("notesCounter");
const emptyMessage = document.getElementById("emptyMessage");

const STORAGE_KEY = "yashavanthSmartNotes";

let notes = [];

try {
const savedNotes = localStorage.getItem(STORAGE_KEY);

if (savedNotes !== null) {
    const parsedNotes = JSON.parse(savedNotes);

    if (Array.isArray(parsedNotes)) {
        notes = parsedNotes.filter(
            note =>
                note &&
                typeof note.id === "string" &&
                typeof note.text === "string"
        );
    }
}

} catch (error) {
console.error("Could not load saved notes:", error);
}

// Save notes to browser storage
function saveNotes() {
try {
localStorage.setItem(STORAGE_KEY, JSON.stringify(notes));
} catch (error) {
console.error("Could not save notes:", error);
alert("Your notes could not be saved in browser storage.");
}
}

// Update the notes counter
function updateCounter() {
    notesCounter.textContent = `Total Notes: ${notes.length}`;

    emptyMessage.hidden = notes.length > 0;
}


// Display all notes
function renderNotes() {
notesContainer.replaceChildren();

notes.forEach(function(note) {
    const noteCard = document.createElement("article");
    noteCard.className = "note-card";

    const noteText = document.createElement("p");
    noteText.className = "note-text";
    noteText.textContent = note.text;

    const deleteBtn = document.createElement("button");
    deleteBtn.className = "delete-btn";
    deleteBtn.textContent = "Delete 🗑️";
    deleteBtn.setAttribute("aria-label", "Delete this note");

    deleteBtn.addEventListener("click", function() {
        deleteNote(note.id);
    });

    noteCard.appendChild(noteText);
    noteCard.appendChild(deleteBtn);

    notesContainer.appendChild(noteCard);
});

updateCounter();

}

// Add a note
function addNote() {
const input = noteInput.value.trim();

if (input === "") {
    alert("Please write a note first! 📝");
    return;
}

const newNote = {
    id: crypto.randomUUID
        ? crypto.randomUUID()
        : `${Date.now()}-${Math.random()}`,
    text: input
};

notes.unshift(newNote);

saveNotes();
renderNotes();

noteInput.value = "";
noteInput.focus();

}

// Delete a note
function deleteNote(noteId) {
notes = notes.filter(function(note) {
return note.id !== noteId;
});

saveNotes();
renderNotes();

}

// Listen for the Add Note button click
addNoteBtn.addEventListener("click", addNote);

// Allow Ctrl+Enter to add a note
noteInput.addEventListener("keydown", function(event) {
if (event.key === "Enter" && (event.ctrlKey || event.metaKey)) {
addNote();
}
});

// Display saved notes when the page opens
renderNotes();

