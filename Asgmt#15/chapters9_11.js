// q1
var city = prompt("Please input your city name: ", "karachi")
if (city == "karachi") {
    alert("Welcome to the city of Lights")
} else {
    alert("No No Habibi!!! Come to Karachi!!!")
}

// q2
var gender = prompt("Please enter your gender: ", "male or female")
if (gender == "male") {
    alert("Good Morning Sir!")
} else {
    alert("Good Morning Ma'am!")
}

// q3
var signal = prompt("Please enter signal color: ", "red, yellow, green")
if (signal == "red") {
    alert("Must Stop")
} else if (signal == "yellow"){
    alert("Ready to move")
} else if (signal == "green") {
    alert("Move now")
}

// q4
var fuelLevel = +prompt("Please enter your fuel level: ", "0.25")
if (fuelLevel <= 0.25) {
    alert("Please refill the fuel in your car!")
} else {
    alert("Continue your journey!")
}

// q5
// a. display
var a = 4;
if (++a === 5){
alert("given condition for variable a is true");
}

// b. no display
var b = 82;
if (b++ === 83){
alert("given condition for variable b is true");
}

// c. display
var c = 12;
if (c++ === 13){
alert("condition 1 is true");
}
if (c === 13){
alert("condition 2 is true");
}
if (++c < 14){
alert("condition 3 is true");
}
if(c === 14){
alert("condition 4 is true");
}

// d. display
var materialCost = 20000;
var laborCost = 2000;
var totalCost = materialCost + laborCost;
if (totalCost === laborCost + materialCost){
alert("The cost equals");
}

// e. display
if (true){
alert("True");
}
if (false){
alert("False");
}

// f. display
if ("car" < "cat") {
  alert("car is smaller than cat");
}

// q6
var subject1 = prompt("Enter the name of the first subject:");
var subject2 = prompt("Enter the name of the second subject:");
var subject3 = prompt("Enter the name of the third subject:");
var totalMarksPerSubject = 100;
var obtainedMarks1 = +prompt(`Enter the obtained marks for ${subject1}: `);
var obtainedMarks2 = +prompt(`Enter the obtained marks for ${subject2}: `);
var obtainedMarks3 = +prompt(`Enter the obtained marks for ${subject3}: `);
var totalObtainedMarks = obtainedMarks1 + obtainedMarks2 + obtainedMarks3;
var totalMarks = totalMarksPerSubject * 3;
var percentage = (totalObtainedMarks / totalMarks) * 100;

if (percentage >= 80) {
    var grade = "A-one"
    var remarks = "Excellent"
} else if (percentage >= 70) {
    var grade = "A"
    var remarks = "Good"
} else if (percentage >= 60) {
    var grade = "B"
    var remarks = "You need to improve"
} else if (percentage < 60) {
    var grade = "Fail"
    var remarks = "Serious improvement needed"
}

var result = "<h1>Marks Sheet</h1>";
result += `<br><br>Total Marks: ${totalMarks}`
result += `<br>Marks obtained: ${totalObtainedMarks}`
result += `<br>Percentage: ${percentage}`
result += `<br>Grade: ${grade}`
result += `<br>Remarks: ${remarks}`
document.write(result);

// q7
var storedGuess = 7;
var guess = +prompt("Guess the number from 1 to 10: ")
if (guess == storedGuess) {
    alert("Congrats! You guessed correct!")
} else if (guess < storedGuess) {
    alert("You guessed less! Try Again.")
} else if (guess > storedGuess) {
    alert("You guessed more! Try Again.")
}

// q8
var checkNumber = prompt("Enter a number to check if the number is divisible by 3: ", 3)
if (checkNumber % 3 === 0) {
    alert(`${checkNumber} is divisible by 3.`);
} else {
    alert(`${checkNumber} is not divisible by 3.`);
}

// q9
var oddEven = prompt("Enter number to check even odd: ")
if (oddEven % 2 === 0) {
    alert(`${oddEven} is Even.`);
} else {
    alert(`${oddEven} is Odd.`);
}

// q10
var temperature = prompt("Enter the temperature:");
if (temperature > 40) {
    alert("It is too hot outside.");
} else if (temperature > 30) {
    alert("The Weather today is Normal.");
} else if (temperature > 20) {
    alert("Today's Weather is cool.");
} else if (temperature > 10) {
    alert("OMG! Today's weather is so Cool.");
} else {
    alert("The temperature is quite low!");
}

// q11
var firstNumber = parseFloat(prompt("Enter the first number:"));
var secondNumber = parseFloat(prompt("Enter the second number:"));
var operation = prompt("Enter the operation (+, -, *, /, %):");
var result;
if (operation === "+") {
    result = firstNumber + secondNumber;
} else if (operation === "-") {
    result = firstNumber - secondNumber;
} else if (operation === "*") {
    result = firstNumber * secondNumber;
} else if (operation === "/") {
    if (secondNumber !== 0) {
        result = firstNumber / secondNumber;
    } else {
        alert("Error: Division by zero is not allowed!");
    }
} else if (operation === "%") {
    result = firstNumber % secondNumber;
} else {
    alert("Invalid operation! Please enter +, -, *, /, or %.");
}

// Show the result if a valid operation was performed
if (result !== undefined) {
    alert(`The result of ${firstNumber} ${operation} ${secondNumber} is: ${result}`);
}