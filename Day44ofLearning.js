let additionButton = document.getElementById("Addition");
let subtractionButton = document.getElementById("Substraction");
let multiplicationButton = document.getElementById("Multiplication");
let divisionButton = document.getElementById("Division");
let modulusButton = document.getElementById("Modulus");

additionButton.addEventListener("click", function() {
    add();
});

subtractionButton.addEventListener("click", function() {
    sub();
});

multiplicationButton.addEventListener("click", function() {
    Mul();
});

divisionButton.addEventListener("click", function() {
    div();
});

modulusButton.addEventListener("click", function() {
    mod();
});



function add() {
    let num1 = Number(document.getElementById("num1").value
    );
    let num2 = Number(document.getElementById("num2").value);
       
      let result = num1 + num2;
    document.getElementById("result").textContent = result;
}

 

function sub() {
    let num1 = Number(document.getElementById("num1").value);
    let num2 = Number(document.getElementById("num2").value);
       
      let result = num1 - num2;
    document.getElementById("result").textContent = result;
}



function Mul() {
    let num1 = Number(document.getElementById("num1").value);
    let num2 = Number(document.getElementById("num2").value);
       
      let result = num1 * num2;
    document.getElementById("result").textContent = result;
}


function div() {
    let num1 = Number(document.getElementById("num1").value);
    let num2 = Number(document.getElementById("num2").value);
       
      let result = num1 / num2;
    document.getElementById("result").textContent = result;
}


function mod() {
    let num1 = Number(document.getElementById("num1").value);
    let num2 = Number(document.getElementById("num2").value);
       
      let result = num1 % num2;
    document.getElementById("result").textContent = result;
}
