// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Assignment code here
generateBtn.addEventListener("click", getLength);

// function to get length of the PW 8-128 characters
var getLength = function() {
  var pwLength = window.prompt("How many characters would you like your password to contain");
  console.log("User entered the pW length to be " + pwLength);
  pwLength = parseInt(pwLength);
  var pwLengthMax = 128;
  var pwLengthMin = 8;  

  if (pwLength < pwLengthMin || pwLength > pwLengthMax) {
    console.log("number entered is not valid, try again");
    return getLength;    
  }
  else
  {
    console.log("number entered is good");
    return pwLength;
  }
};

// // Write password to the #password input
// function writePassword() {
//   var password = generatePassword();
//   var passwordText = document.querySelector("#password");

//   passwordText.value = password;

// }

// // Add event listener to generate button
// generateBtn.addEventListener("click", writePassword);
