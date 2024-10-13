// q1
function displayDateTime() {
  const now = new Date();
  const dateTimeString = now.toString();
  return dateTimeString;
}
// console.log(displayDateTime());

// q2
function fullName(fname, lname) {
  return `Welcome ${fname} ${lname}`;
}
// console.log(fullName("John", "Doe"));

// q3
/*
let int1 = parseInt(prompt("Enter first num to add: "));
let int2 = parseInt(prompt("Enter second num to add: "));
function addTwoNum(int1, int2) {
  return int1 + int2;
}
document.write(addTwoNum(int1, int2));
*/

// q4
function calc() {
  let num1 = parseInt(prompt("Enter 1st number:"));
  let op = prompt("Enter operator (+, -, *, /):");
  let num2 = parseInt(prompt("Enter 2nd number:"));

  if (op == "+") {
    return num1 + num2;
  } else if (op == "-") {
    return num1 - num2;
  } else if (op == "*") {
    return num1 * num2;
  } else if (op == "/") {
    return num1 / num2;
  } else {
    return "Invalid operator";
  }
}
// console.log(calc());

// q5
function numSqr(num1) {
  return num1 ** 2;
}
// console.log(numSqr(2));

// q6
let n = 5;
function factorial(n) {
  if (n === 0) {
    return 1;
  } else {
    return n * factorial(n - 1);
  }
}
// console.log(factorial(n));

// q7
function displayCounting(start, end) {
  let result = "";
  for (let i = start; i <= end; i++) {
    result += i + " ";
  }
  console.log(result);
}

// let startNumber = parseInt(prompt("Enter the start number:"));
// let endNumber = parseInt(prompt("Enter the end number:"));

// displayCounting(startNumber, endNumber);

// q8
function calculateHypotenuse() {
  let base = parseFloat(prompt("Enter the base of the triangle:"));
  let perpendicular = parseFloat(
    prompt("Enter the perpendicular of the triangle:")
  );

  function calculateSquare(num) {
    return num * num;
  }

  let hypotenuse = Math.sqrt(
    calculateSquare(base) + calculateSquare(perpendicular)
  );

  alert(`The hypotenuse is:  ${hypotenuse}`);
}

// calculateHypotenuse();

// q9
// i. Passing Arguments as Values:
function calculateArea(width, height) {
  return width * height;
}
// console.log(calculateArea(5, 10));

// ii. Passing Arguments as Variables:
function calculateArea(width, height) {
  return width * height;
}

let w = 7;
let h = 12;
// console.log(calculateArea(w, h));

// q10
function palindrome(word) {
  let normalizedWord = word.toLowerCase();
  let reversedWord = "";

  for (let i = normalizedWord.length - 1; i >= 0; i--) {
    reversedWord += normalizedWord[i];
  }

  if (normalizedWord === reversedWord) {
    return "The word is a palindrome.";
  } else {
    return "The word is not a palindrome.";
  }
}

// console.log(palindrome(prompt("Enter a word to check if it is a palindrome: ")));

// q11
function capitalizeFirstLetter(str) {
  return str
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

// console.log(capitalizeFirstLetter("the quick brown fox"));

// q12
function findLongestWord(str) {
  var strSplit = str.split(" ");
  var longestWord = "";

  for (var i = 0; i < strSplit.length; i++) {
    if (strSplit[i].length > longestWord.length) {
      longestWord = strSplit[i];
    }
  }

  return longestWord;
}

// console.log(findLongestWord("Web Development Tutorial"));

// q13
function countLetterOccurrences(str, letter) {
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i] === letter) {
      count++;
    }
  }
  return count;
}

// console.log(countLetterOccurrences('JSResourceS.com', 'o'));

// q14
// a. Function to Calculate Circumference
function calcCircumference(radius) {
  const circumference = 2 * Math.PI * radius;
  console.log("The circumference is " + circumference);
}
// b. Function to Calculate Area
function calcArea(radius) {
  const area = Math.PI * radius * radius;
  console.log("The area is " + area);
}
