// Assignment Code
var generateBtn = document.querySelector("#generate");
const lowerCase = "abcdefghijklmnopqrstuvwxyz";
var myarray2 = lowerCase.split("");
console.log (myarray2.length, "length");
var randomNum = Math.floor(Math.random() * 26);
console.log(myarray2[Math.floor(Math.random() * 26)] + myarray2[Math.floor(Math.random() * 26)]);
console.log (randomNum);



// Write password to the #password input
function generatePassword() {
  const UpperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const numbers = "0123456789";
  const special = "!@#$%^&*()_+=';:?/><.,"

  const criteria = (prompt("Number of Characters? (8-12)"));
  console.log (criteria);
  console.log (typeof(criteria));
  if (criteria > 12 || criteria < 8) {
    alert("Number of characters must be between 8-12");
    return;
  }
  const criteria1 = confirm("Must include lowercase letter.");
  const criteria2 = confirm("Must include uppercase letter.");
  const criteria3 = confirm("Must include at least one number.");
  const criteria4 = confirm("Must include at least one special character.");

if (!(criteria1 || criteria2 || criteria3 || criteria4)) {
  alert("Must contain at least one lowercase, uppercase, number, and special character");
  return null;
}
var password = ""
 for (let i=0; i<criteria; i++) {
  password += myarray2[Math.floor(Math.random() * 26)];
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

