let quote = document.getElementById("quote");
let newQuote = document.getElementById("newQuote");


let quotes=['Every great developer you know started with "Hello World!"',
"Your future job is being created by what you learned today",
"Coding : Not just a skill —> It's an art of thinking",
"Coding is LIKE LIFE, it's a journey, not a destination.",
"Keep learning, keep building!"];

 
newQuote.addEventListener("click", function() {
let randomIndex = Math.floor(Math.random() * 5);
quote.textContent = quotes[randomIndex];
});

