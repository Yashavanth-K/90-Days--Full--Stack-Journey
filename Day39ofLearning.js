const developer={
  name :"Yashavanth",
  age:19,
  language:"JavaScript"
};

developer.goal1="Full Stack Developer";
developer.goal2="Top of the NIMCET";

document.getElementById("startButton").onclick = function(){
document.getElementById("name").textContent=developer.name ;
document.getElementById("age").textContent=developer.age;
document.getElementById("language").textContent=developer.language ;
document.getElementById("goal1").textContent=developer.goal1 ;
document.getElementById("goal2").textContent=developer.goal2 ;
}
