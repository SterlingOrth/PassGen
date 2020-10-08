// Assignment Code
var generateBtn = document.querySelector("#generate");
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

// Write password to the #password input
// Function to generate password
function generatePassword() {
  var passwordLength = prompt(
    "Please choose length of password. Must be between 8 and 128."
  );
  var numbers = confirm("Dou you want numbers?");
  var specialChars = confirm("Do you want special characters?");
  var upperCase = confirm("Do you want upper-case?");
  var lowerCase = confirm("Do you want lowercase?");

  if (passwordLength < 8 || passwordLength > 128) {
    return generatePassword();
  }
  // variable to store each character
  var password = [];
  var generatePasswordFunctions = [];

  if (numbers) {
    generatePasswordFunctions.push(generateRandomNumber);
  }
  if (specialChars) {
    generatePasswordFunctions.push(generateRandomCharacter);
  }
  if (numbers) {
    generatePasswordFunctions.push(generateRandomUpper);
  }
  if (numbers) {
    generatePasswordFunctions.push(generateRandomLower);
  }
  for (var i = 1; i < passwordLength; i++) {
    var randonFunctionindex =
      Math.floor(math.random() * generatePasswordFunctions.length) - 1;
    var randomFunction = generatePasswordFunctions[randonFunctionindex];
    var randomCharacter = randomFunction();

    //pushes paswoord
    password.push(randomCharacter);
  }
  return password.join("");
}

// generate random functions
function generateRandomNumber() {
  var numeric = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
  var numberIndex = Math.floor(math.random() * numberic.length) - 1;
  return numeric[numberIndex];
}
function generateRandomSpecial() {
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
}
function generateRandomUpper() {
  return generateUpper.toUppercase();
}
function generateRandomLower() {
  return generateLower.toLowercase();
}

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
