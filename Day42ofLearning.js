let taskInput = document.getElementById("taskInput");
let addTask = document.getElementById("addTask");
let taskList = document.getElementById("taskList");

addTask.addEventListener("click", function() {

  let task = taskInput.value;

  if (task === "") {
    return;
  }

  let taskItem = document.createElement("li");

  taskItem.textContent = task;

  taskItem.addEventListener("click", function() {
    taskItem.style.textDecoration = "line-through";
  });

  let deleteButton = document.createElement("button");

  deleteButton.textContent = " 🗑️ Delete";

  deleteButton.addEventListener("click", function(event) {
    event.stopPropagation();
    taskItem.remove();
  });

  taskItem.appendChild(deleteButton);

  taskList.appendChild(taskItem);

  taskInput.value = "";
});
