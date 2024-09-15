// Chapter 10 (if statements)
// q1
var city = "Karachi";
if ((city = "Karachi")) {
  console.log("The City Of Lights");
}

// q2
var x = 1
var y = 1
if (x === y) {
    var zValue = prompt("Condition is true. Enter the value of z: ");
    alert(`The value of z is: ${zValue}`);  
}

// q3
var zipCode = 10010
var input = prompt("Enter the zipcode for Karachi: ")
if (zipCode == input) {
    alert("Karachi")
} else {
    alert("Please write correct city!")
}

// q4
var numeric = 2
if (numeric == 2) {
    numeric = 1
    alert(`The numeric is: ${numeric}`)
}

// Chapter 11 (Comparison Operators)
// q1
if (var1 !== var2) {
        alert("Not Equal")
    }
    
// q2
if (var1 >= var2) {
    alert("Greater than or equal to")
}

// q3
var numeric = 2
if (numeric !== 2) {
    numeric = 2
    alert(`The numeric is: ${numeric}`)
}

// q4
var numeric1 = 1
var numeric2 = 2
if (numeric1 !== numeric2) {
    alert(`Congrats!`)
}

// q5
var anotherName = "Faarah"
var name = prompt("Enter you first name: ")
if (name !== anotherName) {
    alert("No match! try again")
} 

// Chapter 12 (if…else and else if statements)
// q1
var var1 = 1
var var2 = 2
if (var1 >= var2) {
    alert("Var 1 big")
} else {
    alert("Var 2 big")
}

// q2
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

// q3
var a  = 10
if (a === 10) {
    alert("a is 10")
} else {
    alert(`The correct value of a is 10`)
}

// q4
var city = prompt("Enter a city name: ")
if (city == "karachi"){
    alert("Yes Karachi")
} else if (city == "lahore") {
    alert("Yes Lahore")
} else {
    alert("Not karachi or lahore")
}

// Chapter 13 (Testing sets of conditions)
// q1
if (a==b && c==d)

// q2
if (a==b || c==d)

// q3
if (name == "Hamza" || name == "Arsalan" && age < 60)

// q4
var var1 = 1
var var2 = 2
if (var1 < var2 || var1 > var2){
    alert("Both condition true")
}

// q5
var var1 = "naeem"
var var2 = "alam"
var firstName = prompt("Enter first name: ")
var lastName = prompt("Enter last name: ")
if (var1 == firstName &&  var2 == lastName){
    alert(`good match ${firstName + lastName}`)
} else {
    alert(`no match ${firstName + lastName}`)
}

// Chapter 14 (If statements nested)
// q1
var password = prompt("Enter your password:");
if (password !== "") {
    if (password.length <= 5) {
        alert("Password must be greater than 5 characters.");
    } else {
        alert("OK");
    }
} else {
    alert("Password cannot be empty.");
}

// q2
var a = 1;
var c = "Max";
if (a === 1) {
    if (c === "Max") {
        alert("OK");
    }
}

// q3
if (a === 1 && c === "Max") {
    alert("OK");
}

// q4
var num1 = 10;
var num2 = 10;
if (num1 === num2) {
    if (num1 <= num2) {
        alert("Both conditions passed!");
    }
}
