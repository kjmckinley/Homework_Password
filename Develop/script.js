// Assignment Code
var generateBtn = document.getElementById("generate");
generateBtn.addEventListener("click", writePassword);

var passwordText = document.querySelector("#password");

//create multiple arrays each with their own criteria
var password = "";
var numChar = ['1','2','3','4','5','6','7','8','9','0'];
var symbolChar = ['!','@','#','$','%','&','*','?','+'];
var upperChar = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
var lowerChar = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];

// Write password to the #password input
function writePassword() {

  var passSize = prompt("How long would you like your password to be?");
  passSize = Math.floor(passSize);

  if (passSize > 7 && passSize < 129) {
    var lower = confirm("Do you want to include lower case characters?");
    var upper = confirm("Do you want to include upper case characters?");
    var num = confirm("Do you want to include numbers?");
    var symbol = confirm("Do you want to include special characters?");

    if (lower !== true && upper !== true && num !== true && symbol !== true) {
      alert("ERROR: No criteria was selected. Password cannot be generated");
      // bring user back to the beginning of the prompts.
      writePassword();
    } else {
      generatePassword(passSize, lower, upper, num, symbol);
      
      }

  //this 'else' is outside of nested of statement  
  } else {
    alert("ERROR: password must be between 8 and 128 characters long.")
    // bring user back to the beginning of the prompts.
    writePassword();
    }
  }
  // var password = generatePassword();
  // var passwordText = document.querySelector("#password");

  // passwordText.value = password;

// function to generate a password based on the user criteria that was selected.
function generatePassword (passSize, lower, upper, num, symbol) {

  password = "";
  var i = 0;
  //chooses a random number between 0 and 3, if any are true, concatinate to the end of the string.
  while (i < passSize) {
    var index = Math.floor((Math.random() * 4));

    if (index === 0 && lower === true) {
      password = password + getLow();
      i++;
    }
    if (index === 1 && upper === true) {
      password = password + getUp();
      i++;
    }
    if (index === 2 && num === true) {
      password = password + getNum();
      i++;
    }
    if (index === 3 && symbol === true) {
      password = password + getSymbol();
      i++;
    }
  }
  console.log(password);
  return password;
}

//functions to randomly return each type of criteria selected.
function getLow(){
  return lowerChar[Math.floor((Math.random() * lowerChar.length))];
}

function getUp(){
  return upperChar[Math.floor((Math.random() * upperChar.length))];
}

function getNum(){
  return numChar[Math.floor((Math.random() * numChar.length))];
}

function getSymbol(){
  return symbolChar[Math.floor((Math.random() * symbolChar.length))];
}
// Add event listener to generate button
//generateBtn.addEventListener("click", writePassword);
