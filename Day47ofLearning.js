let password=document.getElementById("password");

password.addEventListener("input", function()  
{
let result =password.value.length;
 
 if(result===0){
   result="Enter the password";
 }
 
 else if(result<=4){
   result="🔴 Weak";
 }
 else if(result<=7){
   result="🟡 Medium";
 }
 else{
   result="🟢 Strong";
 }
 document.getElementById("result").textContent= "Strength : " + result;
});
