// Assignment Code
var generateBtn = document.querySelector("#generate");


// Write password to the #password input
function generatePassword() {
  const lowerCase = "abcdefghijklmnopqrstuvwxyz";
  const UpperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const numbers = "0123456789";
  const special = "!@#$%^&*()_+=';:?/><.,"

  const criteria = Number(prompt("Number of Characters? (8-12"));
 
  if (criteria > 12 || criteria < 8) {
    alert("Number of characters must be between 8-12");
    return null;
  }

  const criteria1 = confirm("Must include lowercase letter.");
  const criteria2 = confirm("Must include uppercase letter.");
  const criteria3 = confirm("Must include at least one number.");
  const criteria4 = confirm("Must include at least one special character.");

if (!(criteria1 || criteria2 || criteria3 || criteria4)) {
  alert("Must contain at least one lowercase, uppercase, number, and special character");
  return null;
}

const allchars = [lowerCase, UpperCase, numbers, special];
var possibleChars = "";

if (criteria1) possibleChars += lowerCase;
if (criteria2) possibleChars += UpperCase;
if (criteria3) possibleChars += numbers;
if (criteria4) possibleChars += special;

let password = "";
for (let 1=0; i<criteria;i++) {
  const randomIndex = Math.floor(Math.random() * possibleChars.length);
  password += possibleChars.charAt(randomIndex);
}

return password;

}

function writePassword() {
  
}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
