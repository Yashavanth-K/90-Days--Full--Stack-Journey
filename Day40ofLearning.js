let title = document.getElementById("title");

document.getElementById("startButton").onclick = function change(){
  title.style.color = "blue";
  title.style.fontSize = "30px";
}

document.getElementById("reset").onclick = function Reset(){
  title.style.color = "white";
  title.style.fontSize = "20px";
}
