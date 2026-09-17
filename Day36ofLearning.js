alert("WELCOME!");


document.getElementById("startButton").onclick = function display(){
function greet() {
    document.getElementById("result").textContent ="Hello Developer!";
}
greet();

function greetuser(name) {
    document.getElementById("result").textContent ="Hello Developer! " + name;
}

greetuser("K Yashavanth");

function add(a,b){
  return a+b; 
} 
let result = add(10, 20);
document.getElementById("sum").textContent = result;
}
