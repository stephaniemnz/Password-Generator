// Assignment Code
var generateBtn = document.querySelector("#generate");
const lowerCase = "abcdefghijklmnopqrstuvwxyz";
var LcArray = lowerCase.split("");
const UpperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var UcArray = UpperCase.split("");
const numbers = "0123456789";
var NumArray = numbers.split("");
const special = "!@#$%^&*()_+=';:?/><.,"
var SArray = special.split("");
console.log (LcArray.length, "length");
console.log (UcArray.length, "length");
console.log (NumArray.length, "length");
console.log (SArray.length, "length");

var randomNum = Math.floor(Math.random() * 26);
console.log(LcArray[Math.floor(Math.random() * 26)] + LcArray[Math.floor(Math.random() * 26)]);
console.log (randomNum);



// Write password to the #password input
function generatePassword() {
 

  const criteria = (prompt("Number of Characters? (8-128)"));
  console.log (criteria);
  if (criteria > 128 || criteria < 8) {
    alert("Number of characters must be between 8-12");
    return;
  }
  const criteria1 = (prompt("Would you like it to include lowercase letters?"));
  console.log(criteria1);
if (criteria1 === "yes") { 
  criteria1 === true;
}
  const criteria2 = (prompt)("Would you like it to include uppercase letters?");
  console.log(criteria2);
  if (criteria2 === "yes") { 
    criteria2 === true;
  }
  const criteria3 = (prompt("Would you like to include numbers?"));
  console.log(criteria3);
  if (criteria3 === "yes") { 
    criteria3 === true;
  }
  const criteria4 = (prompt("Would you like to include special characters?"));
  console.log(criteria4);
  if (criteria4 === "yes") { 
    criteria4 === true;
  }

if (!(criteria1 || criteria2 || criteria3 || criteria4)) {
  alert("Must contain at least one lowercase, uppercase, number, and special character");
  return null;
}
var password = ""
 for (let i=0; i<criteria; i++) {
  password += LcArray[Math.floor(Math.random() * 26)];
 } 
 console.log (password);
const allchars = [lowerCase, UpperCase, numbers, special];
var possibleChars = "";

if (criteria1) possibleChars += lowerCase;
if (criteria2) possibleChars += UpperCase;
if (criteria3) possibleChars += numbers;
if (criteria4) possibleChars += special;


return password;

}

function writePassword() {
  console.log("buttonPress");
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  if (password) {
    passwordText.value = password;
  }


}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

