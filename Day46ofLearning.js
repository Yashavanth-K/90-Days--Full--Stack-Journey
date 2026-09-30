let text = document.getElementById("text");

text.addEventListener("input" , function(){
  let result = text.value;
  document.getElementById("result").textContent = "Characters:" + result.length;
 let words = result.trim().split(" ");
 if (result.trim() === "") {
   words.length=0;
}
  document.getElementById("result1").textContent= "Words:" + words.length;
})

