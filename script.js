// Assignment Code (naming variables)
var generateBtn = document.querySelector("#generate");
var uCase = "abcdefghijklmnopqrstuvwxyz";
var lCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var number = "1234567890"
var sCharacter = "$_&";

// Write password to the #password input
function generatePassword(){
  /* prompting user for password criteria */
  var passwordLength = prompt("How many characters would you like your password to contain?");
  if (passwordLength < 8) {
    alert("Password must be at least 8 charachters");
    passwordLength = prompt("How many characters would you like your password to contain?");
  }else if (passwordLength > 128){

  }

  return "my answer";
}

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword)


