// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  if (password) {
    passwordText.value = password;
  }
  else {
    passwordText.value = '';
  }


}

//define generate password
function generatePassword() {
  var len = prompt('Enter the length of password between 8 and 128 characters');
  if (len < 8) {
    alert('Password should be greater than 8 characters');
    len = prompt('Enter the length of password between 8 and 128 characters');
  }
  else if (len > 128) {
    alert('Password should be less than 128 characters');
    len = prompt('Enter the length of password between 8 and 128 characters');
  }
  var isLowerCase = confirm('Do you want lowercase in password');

  var isUpperCase = confirm('Do you want uppercase in password');

  var isNumber = confirm('Do you want number in password');

  var isSpecialChar = confirm('Do you want special characters in password');

  if (!isLowerCase && !isUpperCase && !isNumber && !isSpecialChar) {
    alert('Atleast one character should be selected. Please try again');
  }
  else {
    var str = '';
    var pass = '';
    if (isLowerCase) {
      var lowerCaseChar = 'abcdefghijklmnopqrstuvwxyz';
      str = str + lowerCaseChar;
      pass = pass + lowerCaseChar.charAt(Math.floor(Math.random() * lowerCaseChar.length));
    }
    if (isUpperCase) {
      var upperCaseChar = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
      str = str + upperCaseChar;
      pass = pass + upperCaseChar.charAt(Math.floor(Math.random() * upperCaseChar.length));
    }
    if (isNumber) {
      var numberChar = '0123456789';
      str = str + numberChar;
      pass = pass + numberChar.charAt(Math.floor(Math.random() * numberChar.length));
    }
    if (isSpecialChar) {
      var specialChar = '@#$&*(),.-_';
      str = str + specialChar;
      pass = pass + specialChar.charAt(Math.floor(Math.random() * specialChar.length));
    }
    var iterationLeft = len - pass.length;
    for (var i = 0; i < iterationLeft; i++) {
      var char = Math.floor(Math.random()
        * str.length + 1);
      pass += str.charAt(char)
    }
    return pass;
  }


}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
