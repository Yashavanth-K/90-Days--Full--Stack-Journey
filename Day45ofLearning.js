let text = document.getElementById("char");

text.addEventListener("input", function() {
  let result = text.value;
  document.getElementById("result").textContent = "Characters:" + result.length;
});
