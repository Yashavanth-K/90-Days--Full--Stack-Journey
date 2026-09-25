let Number=0;

let count = document.getElementById("count");

count.textContent=Number;

let increase = document.getElementById("increase");
increase.addEventListener("click", function() {
Number=Number+1;
count.textContent = Number;
});

let decrease = document.getElementById("decrease");
decrease.addEventListener("click", function() {
Number=Number-1;
count.textContent = Number;
});


let reset = document.getElementById("reset");
reset.addEventListener("click", function() {
  Number=0;
count.textContent = Number;
});

Day 41: Built Interactive Counter App
