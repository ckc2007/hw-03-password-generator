// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// function generatePassword() {}
function generatePassword(){
  let passLen = prompt(
    "How many characters would you like this password to be? (please enter a number between 8 and 128)"
  );
  console.log(passLen);

  function passLenCheck(x) {
    if (x >= 8 && x <= 128) {
      window.alert(
        `awesome, the password length meets the criteria! a password with ${x} characters will be generated.`
      );
      console.log(x);
      return x;
    } else {
      let x = prompt(
        "I'm sorry, that was an invalid entry. How many characters would you like this password to be? (please enter a number between 8 and 128.)"
      );
      console.log(x);
      passLenCheck(x);
    }
  }

}

generateBtn.addEventListener("click", writePassword);


// notes below::
// function generatePassword() {

  let confirmedPassLen = passLenCheck(passLen);

  // confirm lowercase?
  let lowerCase = confirm(
    "Quesetion 1 of 4: Do you want to use lowercase characters?"
  );
  console.log(lowerCase);
  // user message so they know what they selected.
  if (lowerCase) {
    window.alert("Ok, your password will include lowercase characters!");
  } else {
    window.alert("Ok, your password will not include lowercase characters.");
  }

  // confirm uppercase?
  let upperCase = confirm(
    "Question 2 of 4: Do you want to use uppercase characters?"
  );
  console.log(upperCase);
  // user message so they know what they selected.
  if (upperCase) {
    window.alert("Ok, your password will include uppercase characters!");
  } else {
    window.alert("Ok, your password will not include uppercase characters.");
  }

  // confirm numeric characters?
  let numeric = confirm(
    "Question 3 of 4: Do you want to use numeric characters?"
  );
  console.log(numeric);
  // user message so they know what they selected.
  if (numeric) {
    window.alert("Ok, your password will include numeric characters!");
  } else {
    window.alert("Ok, your password will not include numeric characters.");
  }

  // confirm special characters?
  let special = confirm(
    "Question 4 of4: Do you want to use special characters?"
  );
  console.log(special);
  if (special) {
    window.alert("Ok, your password will include special characters!");
  } else {
    window.alert("Ok, your password will not include special characters.");
  }
  // you must choose at lest one character for each TRUE value...
  // you must have a randomizer pick the character from a set of available characters that are approved (only from TRUE values)

  // ok, time to pick the characters - at least ONE of each type of character, and up to the length of the password desired.

  // make a pool now based on the selection criteria

  // min = 0, max = lowerCasePoolArr.length-1
  let lowerCasePoolArr = "abcdefghijklmnopqrstuvwxyz".split("");
  // min = 0, max = upperCasePoolArr.length-1
  let upperCasePoolArr = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
  // min = 0, max = numericPoolArr.length-1
  let numericPoolArr = "1234567890".split("");
  // min = 0, max = specialPoolArr.length-1
  let specialPoolArr = [
    "\u0020",
    "\u0021",
    "\u0022",
    "\u0023",
    "\u0024",
    "\u0025",
    "\u0026",
    "\u0027",
    "\u0028",
    "\u0029",
    "\u002a",
    "\u002b",
    "\u002c",
    "\u002d",
    "\u002e",
    "\u002f",
    "\u003a",
    "\u003b",
    "\u003c",
    "\u003d",
    "\u003e",
    "\u003f",
    "\u0040",
    "\u005b",
    "\u005c",
    "\u005d",
    "\u005e",
    "\u005f",
    "\u0060",
    "\u007b",
    "\u007c",
    "\u007d",
    "\u007e",
  ];

  // need a random number generator that will return a random number between two numbers (range):
  function randomIndexFromRange(a, b) {
    return Math.floor(Math.random() * (b - a + 1) + a);
  }

  let randomIndex;
  let preSolution = [];
  let solution;
  // for each criteria, now we run a loop through to grab characters and pass them to the solution array
  // we have: lowerCase, upperCase, numeric, special <<< booleans
  if (lowerCase) {
    randomIndex = randomIndexFromRange(0, lowerCasePoolArr.length - 1);
    preSolution.push(lowerCasePoolArr[randomIndex]);
  }
  if (upperCase) {
    randomIndex = randomIndexFromRange(0, upperCasePoolArr.length - 1);
    preSolution.push(upperCasePoolArr[randomIndex]);
  }
  if (numeric) {
    randomIndex = randomIndexFromRange(0, numericPoolArr.length - 1);
    preSolution.push(numericPoolArr[randomIndex]);
  }
  if (special) {
    randomIndex = randomIndexFromRange(0, specialPoolArr.length - 1);
    preSolution.push(specialPoolArr[randomIndex]);
  }
  // double check
  console.log(preSolution);

  // function generatePass() {
  //   while (preSolution.length <= confirmedPassLen) {
  //     if (lowerCase && preSolution.length < confirmedPassLen) {
  //       randomIndex = randomIndexFromRange(0, lowerCasePoolArr.length - 1);
  //       preSolution.push(lowerCasePoolArr[randomIndex]);
  //     }
  //     if (upperCase && preSolution.length < confirmedPassLen) {
  //       randomIndex = randomIndexFromRange(0, upperCasePoolArr.length - 1);
  //       preSolution.push(upperCasePoolArr[randomIndex]);
  //     }
  //     if (numeric && preSolution.length < confirmedPassLen) {
  //       randomIndex = randomIndexFromRange(0, numericPoolArr.length - 1);
  //       preSolution.push(numericPoolArr[randomIndex]);
  //     }
  //     if (special && preSolution.length < confirmedPassLen) {
  //       randomIndex = randomIndexFromRange(0, specialPoolArr.length - 1);
  //       preSolution.push(specialPoolArr[randomIndex]);
  //     }
  //   }
  //   console.log(preSolution);
  //   return preSolution.join("");
  // }

  // generatePass();
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

