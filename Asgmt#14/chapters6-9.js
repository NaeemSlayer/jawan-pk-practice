//Question 1
var a = 10;
document.write(`Result:`);
document.write('<br>The value of a is: ', a, '<br>');

document.write('<br>*******************');

a = ++a;
document.write('<br><br>The value of ++a is: ',a);
document.write('<br>Now the value of a is: ',a, '<br>');

document.write('<br>The value of a++ is: ',a);
a++;
document.write('<br>Now the value of A is: ',a,'<br>');

--a;
document.write('<br>The value of --a is: ',a);
document.write('<br>Now the value of a is: ',a, '<br>');

document.write('<br>The value of a-- is: ',a);
a--;
document.write('<br>Now the value of a is: ',a);

//QUESTION 2
var a =2 , b=1;
a = --a ;
document.write('<br><br>a = ',a);
b = --b;
var c = a-b;
document.write('<br>--a - --b = ',c);
b = ++b ;
var d = c+b
document.write('<br>--a - --b + ++b = ',d);
b= b--;
var e = d+b;
document.write('<br>--a - --b + ++b + b-- = ',e);

//Question 3
var userName = prompt("Please enter your name: ");
alert(`Hello ${userName}! Welcome!`);

//Question 5
var table = +prompt("Please enter a number to generate table: ", 5) 
document.write(`<br><br>${table} x 1 = ${table * 1}`)
document.write(`<br>${table} x 2 = ${table * 2}`)
document.write(`<br>${table} x 3 = ${table * 3}`)
document.write(`<br>${table} x 4 = ${table * 4}`)
document.write(`<br>${table} x 5 = ${table * 5}`)
document.write(`<br>${table} x 6 = ${table * 6}`)
document.write(`<br>${table} x 7 = ${table * 7}`)
document.write(`<br>${table} x 8 = ${table * 8}`)
document.write(`<br>${table} x 9 = ${table * 9}`)
document.write(`<br>${table} x 10 = ${table * 10}<br>`)


// Question 6
var subject1 = prompt("Enter the name of the first subject:");
var subject2 = prompt("Enter the name of the second subject:");
var subject3 = prompt("Enter the name of the third subject:");
var totalMarksPerSubject = 100;
var obtainedMarks1 = parseInt(prompt(`Enter the obtained marks for ${subject1}: `));
var obtainedMarks2 = parseInt(prompt(`Enter the obtained marks for ${subject2}: `));
var obtainedMarks3 = parseInt(prompt(`Enter the obtained marks for ${subject3}: `));
var totalObtainedMarks = obtainedMarks1 + obtainedMarks2 + obtainedMarks3;
var totalMarks = totalMarksPerSubject * 3;
var percentage = (totalObtainedMarks / totalMarks) * 100;
var result = "<h2>Marks Report</h2>";
result += "<table border='1' cellpadding='5' cellspacing='0'>";
result += "<tr><th>Subject</th><th>Obtained Marks</th><th>Total Marks</th></tr>";
result += "<tr><td>" + subject1 + "</td><td>" + obtainedMarks1 + "</td><td>" + totalMarksPerSubject + "</td></tr>";
result += "<tr><td>" + subject2 + "</td><td>" + obtainedMarks2 + "</td><td>" + totalMarksPerSubject + "</td></tr>";
result += "<tr><td>" + subject3 + "</td><td>" + obtainedMarks3 + "</td><td>" + totalMarksPerSubject + "</td></tr>";
result += "<tr><td><strong>Total</strong></td><td><strong>" + totalObtainedMarks + "</strong></td><td><strong>" + totalMarks + "</strong></td></tr>";
result += "<tr><td colspan='3'><strong>Percentage: " + percentage.toFixed(2) + "%</strong></td></tr>";
result += "</table>";
document.write(result);