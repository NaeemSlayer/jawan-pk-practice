// chapter 5
// q1
var a = 3
var b = 5
document.write(`Sum of ${a} and ${b} is ${a+b}`);

// q2
document.write(`<br>Subtraction of ${a} and ${b} is ${a-b}`);
document.write(`<br>Multiplication of ${a} and ${b} is ${a*b}`);
document.write(`<br>Division of ${a} and ${b} is ${a/b}`);
document.write(`<br>Modulus of ${a} and ${b} is ${a%b}`);

// q3
var someVar;
document.write("<br>Value after variable declaration is: ", someVar)
someVar = 5
document.write("<br>Initial value: ", someVar)
someVar++
document.write("<br>Value after increment is: ", someVar)
someVar = someVar + 7
document.write("<br>Value after addition is: ", someVar)
someVar--
document.write("<br>Value after decrement is: ", someVar)
someVar = someVar % 3
document.write("<br>The remainder is: ", someVar)

// q4
var ticketPrice = 600
price_of_5 = ticketPrice * 5
document.write("<br>Total cost to buy 5 tickets to a movie is: ", price_of_5, "PKR<br>")

// q5
var table = 4; 
document.write(`<br> Table of ${table}<br>`)
for (let index = 1; index <= 10; index++) {
    const result = table * index;
    document.write(table + " x " + index + " = " + result + "<br>");
}

// q6
var valCelsius = 25
var fahrenheit = (valCelsius * 9/5) + 32;
document.write("<br>" + valCelsius + '\u00B0 Celsius is ' + fahrenheit + '\u00B0 Fahrenheit');
var valFahrenheit = 70
var celsius = (valFahrenheit - 32) * 5 / 9;
document.write("<br>" + valFahrenheit + '\u00B0 Celsius is ' + celsius + '\u00B0 Fahrenheit <br>');

// q7
var price_of_item_1 = 650
var price_of_item_2 = 100
var quantity_of_item_1 = 3
var quantity_of_item_2 = 7
var shiping_charges = 100
var result = price_of_item_1*quantity_of_item_1 + price_of_item_2*quantity_of_item_2 + shiping_charges
document.write(`<br>Price of item 1 is ${price_of_item_1}`)
document.write(`<br>Quantity of item 1 is ${quantity_of_item_1}`)
document.write(`<br>Price of item 2 is ${price_of_item_2}`)
document.write(`<br>Quantity of item 2 is ${quantity_of_item_2}`)
document.write(`<br>Shipping Charges ${shiping_charges}<br>`)
document.write(`<br>Total cost of your order is ${result} <br>`)

// q8
var total_marks = 980
var marks_obtained = 804
var percentage = (marks_obtained / total_marks )* 100
document.write(`<br>Total Marks: `, total_marks)
document.write(`<br>marks obtained: `, marks_obtained)
document.write(`<br>Percentage: `, percentage, "%<br>")

// q9
var usdToPkr = 104.80;
var riyalToPkr = 28;
var usDollars = 10;
var saudiRiyals = 25;
var totalPkr = (usDollars * usdToPkr) + (saudiRiyals * riyalToPkr);
document.write("<br>Total in Currency PKR: " + totalPkr + "<br>");

// q10
var number = 10;
var result = ((number + 5) * 10) / 2;
document.write("<br>The result is: " + result + "<br>");

// q11
var currentYear = 2016;
var birthYear = 1992;
var age1 = currentYear - birthYear;
var age2 = age1 - 1;
document.write(`<br>Current year: ${currentYear}`);
document.write(`<br>Birth year: ${birthYear}`);
document.write(`<br>Your age is: ${age2} or ${age1}<br>`);

// q12
var radius = 20;
var pi = 3.142;
var circumference = 2 * pi * radius;
var area = pi * radius * radius;
document.write("<br>Radius of circle is: " + radius)
document.write("<br>The circumference is " + circumference);
document.write("<br>The area is " + area + "<br>");

// q13
var favoriteSnack = "chocolate chip cookies";
var currentAge = 25;
var maxAge = 80;
var amountPerDay = 3;
var yearsRemaining = maxAge - currentAge;
var totalSnacks = yearsRemaining * 365 * amountPerDay;
document.write("You will need " + totalSnacks + " " + favoriteSnack + " to last you until the ripe old age of " + maxAge + ".");
