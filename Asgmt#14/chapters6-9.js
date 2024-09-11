//Question 1
var a = 10;

document.write('<br>Value of a is ',a);
a = ++a;
document.write('<br><br>Value of ++a is ',a);
document.write('<br>Now the value of A is',a);


document.write('<br>Value of a++ is ',a);
a++;
document.write('<br>Now the value of A is',a);

--a;
document.write('<br>Value of --a is ',a);
document.write('<br>Now the value of A is',a);


document.write('<br>Value of a-- is ',a);
a--;
document.write('<br>Now the value of A is',a);

//QUESTION 2
var a =2 , b=1;
// var result = --a - --b + ++b + b--;
// document.write('<br>',result)
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
var userName = prompt("Please enter your name:");
alert("Hello, " + userName + "! Welcome!");

//Question 5
var userInput = prompt("Enter a number for its multiplication table (leave blank for default 5):");
        
var number = userInput ? parseInt(userInput) : 5;

if (isNaN(number)) {
    number = 5;  
    }

var result = "<h2>Multiplication Table of " + number + "</h2><ul>";
for (var i = 1; i <= 10; i++) {
    result += "<li>" + number + " x " + i + " = " + (number * i) + "</li>";
    }
result += "</ul>";

document.write(result);