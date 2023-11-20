// Assignment Code
var generateBtn = document.querySelector("#generate");
const lowerCase = "abcdefghijklmnopqrstuvwxyz";
var LcArray = lowerCase.split("");
console.log (LcArray.length, "length");
const UpperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var UcArray = UpperCase.split("");
console.log (UcArray.length, "length");
const numbers = "0123456789";
var NumArray = numbers.split("");
console.log (NumArray.length, "length");
const special = "!@#$%^&*()_+=';:?/><.,"
var SArray = special.split("");
console.log (SArray.length, "length");
var random = Math.floor(Math.random() * 26);
var multiSelect = [];

// Write password to the #password input
function generatePassword() {
 
  const criteria = parseInt(prompt("Number of Characters? (8-128)"));
  console.log (criteria);
  console.log (typeof criteria);
  if (criteria > 128 || criteria < 8) {
    alert("Number of characters must be between 8-12");
    return;
  }
  
  const criteria1 = confirm("Would you like it to include lowercase letters?");
  console.log(criteria1);

  const criteria2 = confirm("Would you like it to include uppercase letters?");
  console.log(criteria2);
 
  const criteria3 = confirm("Would you like to include numbers?");
  console.log(criteria3);
  
  const criteria4 = confirm("Would you like to include special characters?");
  console.log(criteria4);
 
if (!(criteria1 || criteria2 || criteria3 || criteria4)) {
  alert("Must contain at least one lowercase, uppercase, number, and special character");
  return;
}

if(criteria1) {multiSelect += LcArray;}
if(criteria2) {multiSelect += UcArray;}
if(criteria3) {multiSelect += NumArray;}
if(criteria4) {multiSelect += SArray;}

let password = "";
for (let i=0; i<criteria; i++) {
  password += multiSelect[Math.floor(Math.random() * multiSelect.length)];
}
 console.log (password);

return password;

}

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  if (password) {
    passwordText.value = password;
  }
}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

