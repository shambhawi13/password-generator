// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

//define generate password
function generatePassword(){
  var len = prompt('Enter the length of password between 8 and 128 characters');
  if(len<8){
    alert('Password should be greater than 8 characters');
    len = prompt('Enter the length of password between 8 and 128 characters');
  }
  else if(len > 128){
    alert('Password should be less than 128 characters');
    len = prompt('Enter the length of password between 8 and 128 characters');
  }
  var isLowerCase = confirm('Do you want lowercase in password');  
  var lowerCase = isLowerCase? prompt('Enter number of lowercase characters') : 0;

  var isUpperCase = confirm('Do you want uppercase in password');
  var upperCase = isUpperCase? prompt('Enter number of uppercase characters') : 0;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
