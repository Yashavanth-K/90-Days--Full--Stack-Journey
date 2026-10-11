setInterval(function() {
let now = new Date();

document.getElementById("date").textContent =
"Date : " + now.toLocaleDateString();

document.getElementById("time").textContent =
"Time : " + now.toLocaleTimeString();

let hour = now.getHours();

if (hour >= 5 && hour < 12) {
document.getElementById("greeting").textContent = "Good Morning 🌅";
} else if (hour >= 12 && hour < 17) {
document.getElementById("greeting").textContent = "Good Afternoon ☀️";
} else if (hour >= 17 && hour < 21) {
document.getElementById("greeting").textContent = "Good Evening 🌇";
} else {
document.getElementById("greeting").textContent = "Good Night 🌙";
}

}, 1000);
           
