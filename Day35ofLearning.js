alert("WELCOME!");


document.getElementById("startButton").onclick = function checkAge() {

    let age = 10;

    document.getElementById("Checker").style.display = "none";

    if (age >= 18) {
        document.getElementById("result").textContent = "You are an adult";
    } else {
        document.getElementById("result").textContent = "You are under 18";
    }
}
