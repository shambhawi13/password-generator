// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  if(password){
    passwordText.value = password;
  }
  else{
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
  //var lowerCase = isLowerCase? prompt('Enter number of lowercase characters') : 0;

  var isUpperCase = confirm('Do you want uppercase in password');
  //var upperCase = isUpperCase? prompt('Enter number of uppercase characters') : 0;

  var isNumber = confirm('Do you want number in password');
  //var num = isNumber? prompt('Enter number of numeric characters') : 0;

  var isSpecialChar = confirm('Do you want special characters in password');
  //var sc = isSpecialChar? prompt('Enter number of special characters') : 0;

  if (!isLowerCase && !isUpperCase && !isNumber && !isSpecialChar) {
    alert('Atleast one character should be selected. Please try again');
  }
  else {
    var str = '';
    if (isLowerCase) {
      str = str + 'abcdefghijklmnopqrstuvwxyz';
    }
    if (isUpperCase) {
      str = str + 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    }
    if (isNumber) {
      str = str + '0123456789';
    }
    if (isSpecialChar) {
      str = str + '@#$&*';
    }
    var pass = '';
    for (var i = 0; i < len; i++) {
      var char = Math.floor(Math.random()
        * str.length + 1);

      pass += str.charAt(char)
    }
    return pass;
  }


}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
