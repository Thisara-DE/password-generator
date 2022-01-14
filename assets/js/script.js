// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Assignment code here
// function to get length of the PW 8-128 characters and return the validated number as an integer
var getLength = function() {
  var pwLength = window.prompt("How many characters would you like your password to contain");
  console.log("User entered the PW length to be " + pwLength);  
  var pwLengthMax = 128;
  var pwLengthMin = 8;
  // pwLength = parseInt(pwLength);   

  if (pwLength < pwLengthMin || pwLength > pwLengthMax) {
    window.alert("Password length must be between 8-128 Characters");
    console.log("number entered is not within the range");
    return getLength();    
  }
  else if (isNaN(pwLength)) {
    window.alert("Password length must be provided as a number");
    console.log("user entered non-numbers");
    return getLength();
  }
  else if (pwLength == "" || pwLength == null) {
    window.alert("Password length cannot be empty");
    console.log("User didn't enter anything");
    return getLength();
  }
  else
  {
    console.log("number entered is valid");
    // calling the next function to confirm if the user needs special characters
    confirmSpChar();      
    return pwLength;
  }  
};

// function to confirm that the user needs special characters in the PW
var confirmSpChar = function() {
  var SpChar = window.confirm("Click OK to confirm including special characters");
  console.log("User presented with special char confirm")

  if (SpChar) {
    console.log("user confirmed Special Characters");
    return true;
  }
  else {
    console.log("user denied Special Characters");
    return false;
  }
};

// function to confirm that the user needs special characters in the PW
var confirmNumericChar = function() {
  var NumChar = window.confirm("Click OK to confirm including numeric characters");
  console.log("User presented with numeric character confirm");

  if (NumChar) {
    console.log("User confirmed numeric characters");
    return true;
  }
  else {
    console.log("user denied numeric characters");
    return false;
  }
};

// function to confirm that the user needs lowercase characters in the PW
var lowerCaseChar = function() {
  var lCaseChar = window.confirm("Click OK to confirm including lowercase characters");
  console.log("User presented with lowercase character confirm");

  if (lCaseChar) {
    console.log("User confirmed lowercase characters");
    return true;
  }
  else {
    console.log("user denied lowercase characters");
    return false;
  }
};

// function to confirm that the user needs upper characters in the PW
var upperCaseChar = function() {
  var upCaseChar = window.confirm("Click OK to confirm including uppercase characters");
  console.log("User presented with uppercase character confirm");

  if (upCaseChar) {
    console.log("User confirmed uppercase characters");
    return true;
  }
  else {
    console.log("user denied uppercase characters");
    return false;
  }
};

// eventListener is capturing the click and launching getLength function
generateBtn.addEventListener("click", getLength);

// // Write password to the #password input
// function writePassword() {
//   var password = generatePassword();
//   var passwordText = document.querySelector("#password");

//   passwordText.value = password;

// }

// // Add event listener to generate button
// generateBtn.addEventListener("click", writePassword);
