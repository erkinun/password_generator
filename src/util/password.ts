// Array of special characters to be included in password
const specialCharacters = [
  "@",
  "%",
  "+",
  "\\",
  "/",
  "'",
  "!",
  "#",
  "$",
  "^",
  "?",
  ":",
  ",",
  ")",
  "(",
  "}",
  "{",
  "]",
  "[",
  "~",
  "-",
  "_",
  ".",
];

// Array of numeric characters to be included in password
const numericCharacters = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

// Array of lowercase characters to be included in password
const lowerCasedCharacters = [
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
  "z",
];

// Array of uppercase characters to be included in password
const upperCasedCharacters = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];

/*
type Inputs = {
  length: number;
  uppercase: boolean;
  lowercase: boolean;
  numbers: boolean;
  symbols: boolean;
};
*/

type PasswordOptions = {
  length: number;
  symbols: boolean;
  numbers: boolean;
  lowercase: boolean;
  uppercase: boolean;
};

function getRandomInt(max: number) {
  return Math.floor(Math.random() * max);
}

// Function for getting a random element from an array
function getRandom(arr: string[]) {
  // use math random to get random index
  const randNum = getRandomInt(arr.length);
  // return the item on that index from arr
  return arr[randNum];
}

// Function to generate password with user input
export function generatePassword(options: PasswordOptions) {
  // depending on the options, generate the bigger array using the arrays above
  let allOptions: string[] = [];
  if (options.symbols === true) {
    allOptions = allOptions.concat(specialCharacters);
  }
  if (options.numbers === true) {
    allOptions = allOptions.concat(numericCharacters);
  }
  if (options.lowercase === true) {
    allOptions = allOptions.concat(lowerCasedCharacters);
  }
  if (options.uppercase === true) {
    allOptions = allOptions.concat(upperCasedCharacters);
  }

  // assume password length is n
  // for loop i = 0 until i is n
  // pick a random letter, add it to the password string

  let password = "";
  for (let i = 0; i < options.length; i++) {
    password = password + getRandom(allOptions);
  }

  return password;
}
