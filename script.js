// Assignment Code
var generateBtn = document.querySelector("#generate");


// Write password to the #password input
function generatePassword() {
  const lowerCase = "abcdefghijklmnopqrstuvwxyz";
  const UpperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const numbers = "0123456789";
  const special = "!@#$%^&*()_+=';:?/><.,"
  
  const criteria = Number(prompt("Number of Characters? (8-12"));
  const criteria1 = confirm("Must include lowercase letter.")
  const criteria2 = confirm("Must include uppercase letter.")
  const criteria3 = confirm("Must include at least one number.")
  const criteria1 = confirm("Must include at least one special character.")

  if (criteria>12 || criteria <8) {
    alert("Number of characters must be between 8-12");
    return null;
  }

  






}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
