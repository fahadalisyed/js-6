/*
var input = parseFloat(prompt("Enter a positive integer:"));
if (input > 0) {
    document.write("Number: " + input + "<br>");
    document.write("Round Off Value: " + Math.round(input) + "<br>");
    document.write("Floor Value: " + Math.floor(input) + "<br>");
    document.write("Ceil Value: " + Math.ceil(input) + "<br>");
} else {
    document.write("Please enter a positive integer.");
}*/

/*
var input = parseFloat(prompt("Enter a negative floating-point number:"));
if (input < 0) {
    document.write("Number: " + input + "<br>");
    document.write("Round Off Value: " + Math.round(input) + "<br>");
    document.write("Floor Value: " + Math.floor(input) + "<br>");
    document.write("Ceil Value: " + Math.ceil(input) + "<br>");
} else {
    document.write("Please enter a negative floating-point number.");
}*/
/*
var input = parseFloat(prompt("Enter a number:"));
var absoluteValue = Math.abs(input);
document.write("Absolute Value: " + absoluteValue + "<br>");
*/
/*
var diceValue = Math.ceil(Math.random()*6);
document.write("Dice Value: " + diceValue + "<br>");
*/
/*
var random = Math.random();

if (random < 0.5) {
  console.log("Heads");
} else {
  console.log("Tails");
}
*/
/*
var randomValue = Math.ceil(Math.random() * 100);
document.write("Random Number: " + randomValue + "<br>");
*/
/*
        
        var userInput = prompt("Please enter your weight (e.g., 50, 50kgs, 50.2kgs, 50.2kilograms):");

var weight = parseFloat(userInput);

        if (!isNaN(weight)) {
            var unit = "kgs"; // Default unit

            if (userInput.includes("kilograms")) {
                unit = "kilograms";
            } else if (userInput.includes("kgs")) {
                unit = "kgs";
            }

        
            document.write("Your weight is: " + weight + " " + unit);
        } else {
            document.write("Invalid input. Please enter a valid weight.");
        }

*/
/*
var secretNumber = Math.floor(Math.random() * 10) + 1;
var userGuess = parseInt(prompt("Guess the secret number (between 1 and 10):"));
if (userGuess === secretNumber) {
    document.write("Congratulations! You guessed the secret number.");
} else {
    document.write("Sorry, the secret number was " + secretNumber + ". Try again.");
}*/


//chapter 31 to 34


//var currentDateTime = new Date();
//document.write("Current Date and Time: " + currentDateTime + "<br>");

//var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
//var currentMonth = new Date().getMonth();
//alert("Current Month: " + months[currentMonth]);

//var days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
//var currentDay = new Date().getDay();
//alert("Current Day: " + days[currentDay]);

//var currentDay = new Date().getDay();
//if (currentDay === 0 || currentDay === 6) {
//  alert("It’s Fun day");
//}

//var currentDate = new Date().getDate();
//if (currentDate < 16) {
//  document.write("First fifteen days of the month");
//} else {
//  document.write("Last days of the month");
//}
/*
var currentDate = new Date(); // Create a Date object representing the current date and time.
var minutesSinceMidnight =
  (currentDate -
    new Date(
      currentDate.getFullYear(),
      currentDate.getMonth(),
      currentDate.getDate()
    )) /
  (1000 * 60);

console.log("Minutes since midnight, Jan. 1, 1970: " + minutesSinceMidnight);
*/
//var currentHour = new Date().getHours();
//if (currentHour < 12) {
//   alert("It's AM");
//} else {
//  alert("It's PM");
//}

//var laterDate = new Date(2020, 11, 31); // December is 11 since months are 0-based
//document.write("Last day of 2020: " + laterDate + "<br>");

//var ramadanStartDate = new Date(2015, 5, 18); // June is 5
//var currentDate = new Date();
//var daysPassed = Math.floor((currentDate - ramadanStartDate) / (1000 * 60 * 60 * 24));
//alert("Days passed since 1st Ramadan: " + daysPassed);
/*
var referenceDate = new Date("January 1, 2015");
var currentDate = new Date();
var secondsElapsed = Math.floor((currentDate - referenceDate) / 1000);
document.write(
  "Seconds elapsed since the beginning of 2015: " + secondsElapsed + "<br>"
);*/
/*
var currentDate = new Date();
var currentHours = currentDate.getHours();
currentDate.setHours(currentHours - 1);
document.write("Current Date and Time: " + currentDate + "<br>");
*/


var currentDate = new Date();
currentDate.setFullYear(currentDate.getFullYear() - 100);
alert("Date reset to 100 years back: " + currentDate);

var userAge = prompt("Please enter your age:");
var currentYear = new Date().getFullYear();
var birthYear = currentYear - parseInt(userAge);
alert("Your birth year is: " + birthYear);

var customerName = "John Doe";
var currentMonth = "September";
var numUnits = 300;
var chargesPerUnit = 7.5;
var netAmount = numUnits * chargesPerUnit;
var dueDateSurcharge = 0.1 * netAmount;
var grossAmount = netAmount + dueDateSurcharge;

document.write("Customer Name: " + customerName + "<br>");
document.write("Current Month: " + currentMonth + "<br>");
document.write("Number of Units: " + numUnits + "<br>");
document.write("Charges Per Unit: " + chargesPerUnit.toFixed(2) + "<br>");
document.write("Net Amount Payable (within Due Date): " + netAmount.toFixed(2) + "<br>");
document.write("Late Payment Surcharge: " + dueDateSurcharge.toFixed(2) + "<br>");
document.write("Gross Amount Payable (after Due Date): " + grossAmount.toFixed(2) + "<br>");



