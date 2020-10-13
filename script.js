// Button generator
var generateBtn = document.querySelector("#generate");
// Constant Variables
var alphabetLower = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "Z",
];
var numeric = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
var char = [
  "!",
  "@",
  "#",
  "$",
  "%",
  "^",
  "&",
  "*",
  "(",
  ")",
  "-",
  "_",
  "+",
  "=",
  "{",
  "}",
  "[",
  "]",
  ":",
  ";",
  "<",
  ">",
  ",",
  ".",
  "?",
  "~",
  "`",
];
var upper = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split("");


// Write password to the #password input
// Function to generate password
function generatePassword() {
  var passwordLength = prompt(
    "Please choose length of password. Must be between 8 and 128."
  );
  //Variables to store User answer
  var numbers = confirm("Do you want numbers?");
  var specialChars = confirm("Do you want special characters?");
  var upperCase = confirm("Do you want upper-case letters?");
  var lowerCase = confirm("Do you want lower-case letters?");

  // If statement to check if parameters are inside our condition, if not send to beginning
  if (passwordLength < 8 || passwordLength > 128) {
    return generatePassword();
  }
  // variable to store each character and password
  var password = [];
  var generatePasswordFunctions = [];

  //If statements for each character condition
  if (numbers) {
    generatePasswordFunctions.push(generateRandomNumber);
     }
  if (specialChars) {
    generatePasswordFunctions.push(generateRandomSpecial);
    }
  if (upperCase) {
    generatePasswordFunctions.push(generateRandomUpper);
  }
  if (lowerCase) {
    generatePasswordFunctions.push(generateRandomLower);
  }

  //For loop to generate random variable
  for (var i = 0; i < passwordLength; i++) {
    var randonFunctionindex =
      Math.floor(Math.random() * generatePasswordFunctions.length);
    var randomFunction = generatePasswordFunctions[randonFunctionindex];  
    var randomCharacter = randomFunction();

    //pushes password
    password.push(randomCharacter);
  }
  // Return password string
  return password.join("");
}

// generate random functions
function generateRandomNumber() {
    var numberIndex = Math.floor(Math.random() * numeric.length);
  return numeric[numberIndex];
}
// function for special characters stored in global
function generateRandomSpecial() {
  var specialCharIndex = Math.floor(Math.random() * char.length);
  return char[specialCharIndex];
}
function generateRandomUpper() {
  var upperIndex = Math.floor(Math.random() * alphabetLower.length);
  return upper[upperIndex];
}
function generateRandomLower() {
  var lowerIndex = Math.floor(Math.random() * upper.length);
  return alphabetLower[lowerIndex];
}
// prescripted code
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button

// document.getElementById("generate").addEventListener("click", writePassword);
generateBtn.addEventListener("click", writePassword)