// Assignment Code (naming variables)
var generateBtn = document.querySelector("#generate");
var lCase = "abcdefghijklmnopqrstuvwxyz";
var uCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var number = "1234567890"
var sCharacter = "$_&";

// Write password to the #password input
function generatePassword(){
  /* prompting user for password criteria */
  var options = "";
  var passwordLength = prompt("How many characters would you like your password to contain?");
  if (passwordLength < 8) { /* password minimum */
    alert("Password must be at least 8 charachters!");
  /* redo generatePassword function */
    passwordLength = prompt("How many characters would you like your password to contain?");
  } else if (passwordLength > 128){ /* password maximum */
  alert("Password must be less than 128 charachters!");
  passwordLength = prompt("How many characters would you like your password to contain?");
  } else { /* allows user to chose upper/lowercase */
    var upCaseUser = confirm("Would you like to use uppercase letters?");
    if (upCaseUser == false){
        var loCaseUser = confirm("Would you like to use lowercase letters?");
        if (loCaseUser) options += lCase;
    }else {
      options += uCase;
      loCaseUser = confirm("Would you like to use lowercase letters?");
    }
  } if (loCaseUser == false && upCaseUser == false){ /* alerts user to use letters */
    alert("Password must contain letters!")
  } else {
    var numUser = confirm("Would you like to use numbers?")/* allows user to use numbers */
  } if (numUser == true || numUser == false){
    var sCharUser = confirm("Would you like to use special characters?");
    if (numUser) options += number;
  }
  var res = ""
  for(i = 0; i < passwordLength; i++){
    res += options[Math.random(options)]
  }

  alert (res);
}



function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword)


