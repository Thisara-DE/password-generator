// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Assignment code here
// function to get length of the PW 8-128 characters and return the validated number as an integer
var getLength = function() {
  var pwLength = window.prompt("How many characters would you like your password to contain");  
  var pwLengthMax = 128;
  var pwLengthMin = 8;
  // pwLength = parseInt(pwLength);   

  if (pwLength < pwLengthMin || pwLength > pwLengthMax) {
    window.alert("Password length must be between 8-128 Characters");
    return getLength();    
  }
  else if (isNaN(pwLength)) {
    window.alert("Password length must be provided as a number");    
    return getLength();
  }
  else if (pwLength == "" || pwLength == null) {
    window.alert("Password length cannot be empty");    
    return getLength();
  }
  else
  {   
    // calling the next function to confirm if the user needs special characters
    confirmSpChar();      
    return pwLength;
  }  
};

// function to confirm that the user needs special characters in the PW
var confirmSpChar = function() {
  var SpChar = window.confirm("Click OK to confirm including special characters");  

  if (SpChar) {    
    return true;
  }
  else {    
    return false;
  }
};

// function to confirm that the user needs special characters in the PW
var confirmNumericChar = function() {
  var NumChar = window.confirm("Click OK to confirm including numeric characters");  

  if (NumChar) {
        return true;
  }
  else {    
    return false;
  }
};

// function to confirm that the user needs lowercase characters in the PW
var lowerCaseChar = function() {
  var lCaseChar = window.confirm("Click OK to confirm including lowercase characters");  

  if (lCaseChar) {    
    return true;
  }
  else {    
    return false;
  }
};

// function to confirm that the user needs upper characters in the PW
var upperCaseChar = function() {
  var upCaseChar = window.confirm("Click OK to confirm including uppercase characters");  

  if (upCaseChar) {    
    return true;
  }
  else {    
    return false;
  }
};

var randomObj = {
  special: getRandomSpChar,
  number: getRandomNumber,
  lower: getRandomLowerCase,
  upper: getRandomUpperCase
}

var getRandomSpChar = function(confirmSpChar) {
    if(confirmSpChar) {
    var specialChar = '!#$%&^()*,[]{}./';
    return specialChar[Math.floor(Math.random() * specialChar.length)];
    }
    else {
      return null;
    }
}

var getRandomNumber = function() {

  return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
}

var getRandomLowerCase = function() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}

var getRandomUpperCase = function() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}


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
