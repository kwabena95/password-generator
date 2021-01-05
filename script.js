// password characters
const characterSet = ['a', 'b', 's', 'r', 'g', 'd', 'p', 'q', 'z', 'N', 'Y', 'F', 'O', 'S', 'A', 'G', 'M', 'Q', 0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

let specialCharacters = ['!', '@', '#', '$', '%', '^', '&', '*'];

// create a function for characterset
const randomCharacter = () => {
  let charset = Math.floor(Math.random() * characterSet.length);
  return charset;
}

// create a function for specialcharacters
const randomSpecialCharacter = () => {
  let specialSet = Math.floor(Math.random() * specialCharacters.length);
  return specialSet;
}

// create a function to combine both arrays
const combineRandom = () => {
  // set initial password to empty
  let password = '';
  //subtract 2 from user password legth    
  for (let i = 0; i < askUser - 3; i++) {
    let result1 = characterSet[randomCharacter()];
    password += result1;
  }
  // add 2 to special characters
  for (let i = 0; i < 3; i++) {
    let result2 = specialCharacters[randomSpecialCharacter()];
    password += result2;
  }
  return password;
}

//create a function for no specail characters
const noSpecialCharacters = () => {
  let password = '';
  for (let i = 0; i < askUser; i++) {
    let result3 = characterSet[randomCharacter()];
    password += result3;
  }
  return password;
}


// Assignment code here
let askUser;
// create a function for prompts
const generatePassword = () => {
  const minLength = 8;
  const maxLength = 128;
  let pass;
  askUser = null;
  while (askUser === null || askUser.length < minLength || askUser.length > maxLength) {
    // ask the user again
    askUser = prompt('Enter a password character length. Character length must be at least 8 and between 128.');
    let confirmSpecialCharacter;
    // if password is between length range
    if (askUser >= minLength && askUser <= maxLength) {
      // ask for special characters
      confirmSpecialCharacter = confirm('Would you like for your password to include special characters?');
      // if yes, call combine random
      pass = confirmSpecialCharacter ? combineRandom() : noSpecialCharacters();
    }
    return pass;
  }

}


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);



