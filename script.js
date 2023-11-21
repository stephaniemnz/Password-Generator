//  VARIABLES
var generateBtn = document.querySelector("#generate");
const lowerCase = "abcdefghijklmnopqrstuvwxyz";
var LcArray = lowerCase.split("");
const UpperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var UcArray = UpperCase.split("");
const numbers = "0123456789";
var NumArray = numbers.split("");
const special = "!@#$%^&*()+=';:?/><.";
var SArray = special.split("");


// Password Generator
function generatePassword() {
 
  const criteria = parseInt(prompt("Number of Characters? (8-128)"));
  console.log (criteria);
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
const availableCharacters = [];
console.log (availableCharacters);
if (criteria1) {
  availableCharacters.push(...LcArray);
}
if (criteria2) {
  availableCharacters.push(...UcArray);
}
if (criteria3) {  
  availableCharacters.push(...NumArray);
}
if (criteria4) {      
  availableCharacters.push(...SArray);
}

let password = "";
for (let i=0; i<criteria; i++) {
  password += availableCharacters[Math.floor(Math.random() * availableCharacters.length)];
console.log (password);
}

return password;
}


//Display Password
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  if (password) {
    passwordText.value = password;
  }
}


//Event listener
generateBtn.addEventListener("click", writePassword);

