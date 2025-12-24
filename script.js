document.write("<h2>1.Positive Integer:</h2>");
var num1 = parseFloat(prompt("Enter a positive integer:"));

document.write("Number: " + num1 + "<br>");
document.write("Round off: " + Math.round(num1) + "<br>");
document.write("Floor value: " + Math.floor(num1) + "<br>");
document.write("Ceil value: " + Math.ceil(num1) + "<hr>");

document.write("<h2>2.Negative Floating Number:</h2>");

var num2 = parseFloat(prompt("Enter a negative floating point number:"));

document.write("Number: " + num2 + "<br>");
document.write("Round off: " + Math.round(num2) + "<br>");
document.write("Floor value: " + Math.floor(num2) + "<br>");
document.write("Ceil value: " + Math.ceil(num2) + "<hr>");

document.write("<h2>3.Absolute Value:</h2>");

var num3 = parseFloat(prompt("Enter a number to find absolute value:"));
document.write("Absolute value of " + num3 + " is " + Math.abs(num3) + "<hr>");

document.write("<h2>4.Dice Simulation:</h2>");
var dice = Math.floor(Math.random() * 6) + 1;
document.write("Dice value: " + dice + "<hr>");

document.write("<h2>5.Coin Toss:</h2>");
var toss = Math.floor(Math.random() * 2) + 1;

if (toss === 1) {
    document.write("Coin value: Heads<br>");
} else {
    document.write("Coin value: Tails<br>");
}
document.write("<hr>");

document.write("<h2>6.Random Number(1–100):</h2>");
var randomNum = Math.floor(Math.random() * 100) + 1;
document.write("Random number between 1 and 100: " + randomNum + "<hr>");

document.write("<h2>7.Weight Parsing:</h2>");
var weightInput = prompt("Enter your weight (e.g. 50, 50kgs, 50.2kgs, 50.2kilograms):");
var weight = parseFloat(weightInput);
document.write("Your weight is: " + weight + " kgs<hr>");

document.write("<h2>8.Secret Number:</h2>");
var secretNumber = Math.floor(Math.random() * 10) + 1;
var userGuess = parseInt(prompt("Guess the secret number (1 to 10):"));

if (userGuess === secretNumber) {
    document.write("Congratulations! You guessed the secret number.<br>");
} else {
    document.write("Sorry! The secret number was " + secretNumber + "<br>");
}