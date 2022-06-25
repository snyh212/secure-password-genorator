# secure-password-genorator

[Deployable Link:https://snyh212.github.io/secure-password-genorator/](https://snyh212.github.io/secure-password-genorator/)

## Descriptiom

The purpose of "secure-password-genorator" is to allow a user to have a secure password genorated for them based on a couple specific criteria. The user is prompted whether to use uppercase letters, lowercase letters, numbers and special charachters.

## Technologies used

Project done using HTML, CSS, JavaScript, Github, GitLab on VS code.

## Code

```
/* assigning variables */
var generateBtn = document.querySelector("#generate");
var lCase = "abcdefghijklmnopqrstuvwxyz";
var uCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var number = "1234567890"
var sCharacter = "$_&";

function generatePassword(){
  
/* prompting user for password criteria */

  var options = "";
  var passwordLength = prompt("How many characters would you like your password to contain?");
  if (passwordLength < 8) { /* password minimum */
    alert("Password must be at least 8 charachters!");
```
<img src="pictures\Screenshot 2022-06-25 000922.png">
<img src="pictures\Screenshot 2022-06-25 000950.png">

## Contact

[E-mail: Snyh121@gmail.com](mailto:snyh121@gmail.com")  
[GitHub: snyh212](https://r.search.yahoo.com/_ylt=AwrJ6yegl7JipfcAzB5XNyoA;_ylu=Y29sbwNiZjEEcG9zAzEEdnRpZAMEc2VjA3Ny/RV=2/RE=1655900193/RO=10/RU=https%3a%2f%2fgithub.com%2fsnyh212/RK=2/RS=jAFa0VbZnIusPrwj.ZmIx9gZ3AA-)  
[LinkdIn: Shmuel-Hoffman](https://www.linkedin.com/in/shmuel-hoffman-254b0223b?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BS2rg0PtBTLeG2szT2ZbGmg%3D%3D)