// ACTIVITY 1 - THE DIGITAL MEMORY BOX
// ==========================================

// Part 1 - Group Discussion: 
// We discussed the importance of a variable and how they help us store data. We also discussed the difference between console.log(), alert() and prompt(). We also discussed the use of "let" and "const" in variable declaration. Part of our discussion was on the different data types, including numbers, strings, numbers and booleans.

// Part 2: Predict the Output

// Snippet A
 let age = 25;
 console.log(age);  

 age = "twenty-five";
 console.log(age); 
// it will print 25 and then twenty-five because the variable age was first assigned a number value and then reassigned a string value.

// Snippet B
const isRaining = true;
console.log("Is it raining? " + isRaining);
// it will print "Is it raining? true" because the variable isRaining was assigned a boolean value of true and then printed to the console with a string concatenation.

// Snippet C
let favoriteNumber;
console.log(favoriteNumber);
// it will print "undefined" because the variable favoriteNumber was declared but not assigned a value.


// Part 3: Debugging Challenge
/*The wrong code given was:
let userName = "Amara"
console.log(username);

const favoriteColor = "blue";
console.log(favoriteColor);
*/

// The correct code is as follows:
let userName = "Amara";
console.log(userName);

const favoriteColor = "blue";
console.log(favoriteColor);


// Part 4 - Collaborative Technical Challenge: 
// Your group needs to build a simple "Welcome Program" that greets a new user by name and tells them what year they were born, based on their age.
let newUserName = prompt("What is your name?");
let yourAge = prompt("How old are you?");

let birthYear = 2026 - yourAge;
let favoriteHobby = prompt("What is your favorite hobby?");

alert(`Hello, ${newUserName}! You were born in ${birthYear}, and your favorite hobby is ${favoriteHobby}.`);


// ACTIVITY 2
// BUILDING SENTENCES WITH CODES
//===============================================

// Part 1 - Group Discussion
// We discussed the difference between + operator used for math and the + used for joining strings?

// Part 2 - Predict the output
// Snippet A:
let a = 10;
let b = "5";

console.log(a + b); // This will print 105 (JS converts 10 to a string and joins them)
console.log(a - b); // This will print 5 (JS converts 5 to a number and does the subtraction)

// Snippet B:
let price = 20;
let quantity = "3";
console.log(`Total cost: $${price * quantity}`);
// This will print "Total cost: $60" (JS converts "3" to a number and does the multiplication)

// Snippet c:
let x = 4;
let y = "2";
console.log("Result: " + (x + y));
console.log("Result: " + (x - y));
// This will print "Result: 42" (JS converts 4 to a string and joins them) and "Result: 2" (JS converts "2" to a number and does the subtraction)


// Part 3 - Debugging Challenge:
// the wrong code given was:
/*
// 1
let firstName = "Tunde";
let lastName = "Okafor";
let fullName = firstName + " " + lastName;
console.log("Welcome, " + fullname + "!");

// 2
let itemPrice = "15";
let total = itemPrice + 5;
console.log(`Your total is: $${total}`); 

*/


// The corrected code is as follows:
// 1
let firstName = "Tunde";
let lastName = "Okafor";
let fullName = firstName + " " + lastName;
console.log("Welcome, " + fullName + "!");

// 2
let itemPrice = "15";
let total = Number(itemPrice) + 5;
console.log(`Your total is: $${total}`);

// Part 4 - Collaborative Technical Challenge
//Build a "Receipt Generator" that asks the user for an item name, its price, and how many they're buying, then displays a formatted receipt line.

const itemName1 = prompt("What do you want to buy?");
const itemPrice1 = Number(prompt("Enter the price:"));
const itemQuantity = Number(prompt("How many do you want to buy?"));

const discount = 10;
const totals = itemPrice1 * itemQuantity;
const discountedAmount = totals * (discount / 100);
const discountedPrice = Math.round(totals - discountedAmount);

console.log(`You bought ${itemName1} x ${itemQuantity} = #${totals}`);

alert(`You bought ${itemName1} x ${itemQuantity} = ₦${discountedPrice.toLocaleString()} with ${discount}% discount`);


// Activity 3: The Type Detective Agency
// Part 1: Group discussion
// We had group discussion on Number, parseInt and parseFloat

// part 2: Predict the output
// Snippet A
let input = "42";
let converted = Number(input);
console.log(input + 8); // prints 428
console.log(converted + 8); // prints 50

// Snippet B
let name = "  Chidinma  ";
console.log(name.trim());  // prints Chidimma
console.log(name.length);  // prints 8

// Snippet C
let word = "JavaScript";
console.log(word.toUpperCase());  // prints JAVASCRIPT
console.log(word);  // prints JavaScript

// Part 3: Debugging Challenge
// wrong code given
/*
// 1
let userAge = prompt("Enter your age:");
let nextYearAge = Number + 1;
console.log("Next year you will be " + nextYearAge);

// 2
let city = "lagos"
console.log(city.ToUpperCase()); 
*/


// correct code
// 1
let userAge = prompt("Enter your age:");
let nextYearAge = Number(userAge) + 1;
console.log("Next year you will be " + nextYearAge);

// 2
let city = "lagos";
console.log(city.toUpperCase()); 

// Part 4
// Collaborative Technical Challenge
//Build a "Username Generator" that asks for a person's first name and favorite number, converts the number properly, and creates a username by combining the lowercase first name with the number.

const yourFirstName = prompt("What is your first name?");
const yourFavoriteNumber = Number(prompt("Enter your favorite number"));

alert(`Your username is: ${yourFirstName.toLocaleLowerCase().trim()}${yourFavoriteNumber}`)



// Activity 4: Text and Numbers
// Part 1: Group discussion

// Part 2: Predict the output
// Snippet A
console.log(Math.random(4.5)); // 0.7362819
console.log(Math.floor(4.9));  // 4
console.log(Math.ceil(4.1));   // 4.1

// Snippet B
let phrase = "I love JavaScript";
console.log(phrase.includes("love"));  //true
console.log(phrase.split(" "));        // ["I", "love", "JavaScript"]

// Snippet C
let num = 7;
console.log(Math.max(num, 10, 3));  // 10
console.log(Math.min(num, 10, 3));  // 3

// part 3: Debugging Challenge
// wrong code given
/*
let score = 87.6;
let rounded = Math.Round(score);
console.log("Rounded score: " rounded);

let sentence = "Learning to code is fun"
let firstWord = sentence.split(" ")[0];
console.log(firstWord);
*/


// correct code
let score = 87.6;
let rounded = Math.round(score);
console.log("Rounded score: " + rounded);

let sentence = "Learning to code is fun"
let firstWord = sentence.split(" ")[0];
console.log(firstWord);

// Part 4: Collaborative Technical Challenge
// GRADE ROUNDER AND REPORTER
//Build a "Grade Rounder and Reporter" that asks for a student's exact numeric score, rounds it, and builds a message reporting the rounded score along with the student's name in all uppercase.

const studentName = prompt("Enter the student's name").trim();
const studentScore = Number(prompt("Enter the student's score"));

const roundedScore = Math.round(studentScore);
const report = `student: ${studentName.toUpperCase()} Rounded Score: ${roundedScore}`;

alert(report);
console.log(report);


// Activity 5: Decision Makers
// Part 1: Group Discussion

// Part 2: Predict the output
// Snippet A
let temperature = 15;
if (temperature > 30) {
    console.log("It's hot!");
} else if (temperature > 15) {
    console.log("It's warm.");
} else {
    console.log("It's cool.");
}
// It's cool.

// Snippet B
let age = 20;
let hasID = false;
if (age >= 18 && hasID) {
    console.log("You may enter.");
} else {
    console.log("Entry denied.");
}
// Entry denied.

// Snippet C
let password = "1234";
if (password === "0000") {
    console.log("Password is changed!.");
} else {
    console.log("No change.");
}
// No Change

// Part 3: Debugging Challenge
// wrong code given:
/*
let hour = 14;
if (hour < 12) {
    console.log("Good morning!");
 else if (hour < 18) {
    console.log("Good afternoon!");
} else {
    console.log("Good evening!");
}
*/

// Correct code
let hour = 14;
if (hour < 12) {
    console.log("Good morning!");
} else if (hour < 18) {
    console.log("Good afternoon!");
} else {
    console.log("Good evening!");
}

// part 4: Collaborative Technical Challenge
//Build a "Movie Ticket Pricer" that asks for a person's age and whether it's a weekday or weekend, then decides the ticket price using conditional logic (e.g., discounts for children, seniors, or weekday showings).

const personAge = Number(prompt("Please enter your age"));

const today = new Date();
const day = today.getDay();

const isWeekend = day === 0 || day === 6;

let ticketPrice = 5000;
let discountedTicketPrice = ticketPrice - (ticketPrice * 10 / 100);

if (personAge < 13) {
    alert(`You are a child, therefore your ticket price is: ${discountedTicketPrice} with 10% discount`);
} else if (personAge >= 65) {
    alert(`You are a Senior Man, your ticket price is: ${discountedTicketPrice} with 10% discount`);
} else if (isWeekend) {
    alert(`It's weekend, your ticket price is ${discountedTicketPrice} with 10% discount`);
} else {
    alert(`You are an adult, no discount for you, your ticket price is: ${ticketPrice}`);
}


// Activity 6: Shortcuts and Choices
// Part 1
// We had a group discussion on the use of ternary operators as a shortcut to "if else" statements.

// A ternary operator can replace an if / else if / else with three branches, but it won't be easy to read, the normal thing is for a ternary operator to handle two possible outcomes.

condition ? valueIfTrue : valueIfFalse;

// For three branches, the ternary operators can be nested as shown below: 
const studentsScore = score >= 80
    ? "A"
    : score >= 65
        ? "B"
        : "C";

// A ternary operator becomes hard to read and understand when there are multiple condtions, in this case, it is better to use the normal if/else statements.

// Part 2
// Snippet A
 let score = 72;
 let result = score >= 50 ? "Pass" : "Falil";
 console.log(result); // prints "Pass" because score is greater than or equal to 50.

// Snippet B
let cartTotal = 0;
let message = cartTotal > 0 ? "Proceed to checkout" : "Your cart is empty";
console.log(message); // prints "Your cart is empty"

// Snippet C
let stock = 5;
console.log(`Stock status: ${stock > 0 ? "Available" : "Out of stock"}`); // prints "Available"

// Debugging Challenge
// let temperature = 28;
// let feeling = temperature > 25 ? "hot" : "cold"; //added ":"
// console.log(feeling);

// let isMember = true;
// let discounts = isMember ? 10 : 0;
// console.log(`Discount: ${discounts}%`);


// ACTIVITY 7 - REPEAT AFTER ME
// ======================================

// Part 1 - Group Discussion:

// 1. A loop is used when there is need for repetition of multiple task, instead of writing the same codes over and over again.

// 2. Difference between a for loop and a while loop: The major difference is how the loops are controlled to stop executing. 
// We use for loop when we know how many times an action will be repeated.
for (let i = 1; i <= 5; i++)
    console.log(i); //Here we want the loop to run 5times
// for loop uses three things: 
for (startingPoint; condition; update) {
    // code to repeat
}

// We use while loop when we don't know how many times the loop will run
let myPassword = "";
while (myPassword !== 12345) {
    myPassword = prompt("Please enter a correct password:");
}

// 3. An infinite loop is a loop that keeps running without stopping because the loop condition always remains true.
let i = 2;
while (i <= 10) {
    console.log(i);  //this is an infinite loop because i is always less than 10 since the i value has been set to be 2
}
// you can correct it by updating the value of i inside the loop by adding i++;

// Part 2
// Snippet A
for (let i = 1; i <= 5; i++) {
    console.log(i); // this will print numbers from 1 to 5
}

// Snippet B
let count = 3;
while (count > 0) {
    console.log(`Countdown: ${count}`)
    count--; 
}
console.log("Liftoff!");
// this will print
// Countdown: 3
// Countdown: 2
// Countdown: 1
// Liftoff!

// Snippet C
{
for (let i = 0; i < 10; i = i + 2) {
    console.log(i); // this will print numbers less than 10 starting from 0 and adding two each time
}

// Part 3 - Debugging Challenge
let total = 0;
for (let i = 1; i <= 5; i++) {
    total = total + i;
}
console.log("total: " + total);

// 2
let number = 5;
let count = number;
while (count > 0) {
    console.log(`Countdown: ${count}`);
    count--;
}

console.log(`Total: ${total}`);

let count1 = 5;
while (count1 > 0) {
    console.log(count1);
    count1--
}

// ACTIVITY 8 - REUSABLE MACHINES
// ======================================
// Part 1: We had a group discussion on functions, function declarations and parameters. We noted the difference between a parameter and an argument 

// Part 2: 
// Snippet A: 
function greets(name) {
    console.log("Hello, " + name + "!");
}

greets("Ifeoma"); // prints "Hello Ifeoma!"
greets("David");  // prints "Hello David!"

// Snippet B
function addNumbers(a, b) {
    console.log(a + b);
}

addNumbers(4, 7); //prints 11
addNumbers(10) // prints NaN because second argument is not provided

// Snippet C:
function sayHi() {
    console.log("Hi There!");
}

console.log("Before calling function");
sayHi( ) ;
console.log("After calling function");

// Part 3:
// Debugging Challenge:
function calculateArea(length, width) {
    console.log(length * width)
}

function displayMessage(msg) {
    console.log(msg);
}

displayMessage("Area calculator ready");
calculateArea(5, 10); // started calculate with lowercase

// Part 4: Build a "Tip Calculator Toolkit" made of two functions: one that calculates a tip based on a bill amount and tip percentage, and another that displays a formatted final message.

function calculateTip(bill, percentage) {
    const tip = bill * (percentage / 100);
    return tip;
}

function formattedMessage(tip) {
    console.log(`Your bill is: ₦${tip}`);
}

function splitBill(totalBill, numOfPeople) {
    const billPerPerson = totalBill / numOfPeople;
    return billPerPerson;
}

const tipAmount = calculateTip(1500, 10);
calculateTip(1500, 10);
formattedMessage(tipAmount);
splitBill(2000, 10);


// ACTIVITY 9 - FUNCTION EXPRESSIONS AND ARROW FUNCTIONS
// ======================================

// Part 1 - Group Discussion:  We had a group discussion on anonymous functions and arrow functions, we got to know that anonymous functions are functions that has no name. Anonymous functions can be run by storing it in a variable.

function greeter1() {
    console.log("Hello!");
} //this function has no name, we therefore store in in a variable called greet as shown below: 

const greeter = function() {
    console.log("Hello!");
}

greeter();

// anonymous function can also be created and run immediatly. This is called IIFE (Immediatly Invoked Function Expression)
(function() {
    console.log("Hello!");
})();

// Arrow functions as the name implies uses an arrow to show what the function does
const greeting = () => {
    console.log("Hello!");
}

// Part 2: 
// Snippet A:
const multiply = function(a, b) {
    return a * b;
};

console.log(multiply(3, 4)); //this will print 12

// Snippet B 
const double = num => num * 3;
console.log(double(6)); // prints 12
console.log(double(0)); // prints 0

// Snippet C:
const introduce = (name, age) => {
    console.log(`My name is ${name} and I am ${age} years old.`);
}

introduce("Zainab", 22); 
//prints "My name is Zainab and I am 22 years old"

// Part 3 - Debugging Challenge:
// 1
const greetUser = (name) => {
    console.log("Welcome, " + name)
}

greetUser("Emeka"); //greetUser should have same spelling as what was declared

// 2
const subtract = (a, b) => a - b
console.log(subtract(10, 4));

// Part 4 - Collaborative Technical Challenge:
// Build a small "Math Helper Toolkit" using arrow functions for common calculations a student might need: converting a percentage to a decimal, calculating a rectangle's area, and converting Celsius to Fahrenheit.

// Function for converting percentage to decimal
const percentageToDecimal = (digit) => {
    return digit / 100;
}

// Function to calculate area of a rectangle
const rectangleArea = (length, breadth) => {
    const area = length * breadth;
    return area;
}

// Function to convert Celsius to Fahrenheit
const celToFahren = (temp) => {
    return (temp * 9 / 5) + 32;
}

// Function that converts Fahrenheit back to Celsius
const fahrenToCelcius = (temp) => {
    return (temp - 32) * 5 / 9;
}

console.log(percentageToDecimal(25)); // prints 0.25
console.log(rectangleArea(10, 5));    // prints 50
console.log(celToFahren(25));         // prints 77
console.log(fahrenToCelcius(77)); // prints 25


// ACTIVITY 10 - BUILD-A-PROGRAM CHALLENGE
// ======================================

// Part 1: Group Discussion
// We had a group on the concept that connects most other concepts, we made mention of the concept of variables as a major concept that connects others.

// Part 2: Predicting Outputs
// Snippet A:
const getDiscount = (total) => total >= 100 ? total * 0.1 : 0;

let orderTotal = 120;
let discount = getDiscount(orderTotal);
console.log(`Discount: $${discount}`); // prints "Discount: $12"
console.log(`Final total: $${orderTotal - discount}`); // Prints "Final total: $108"

// Snippet B: 
function classifyNumbers(limit) {
    for (let i = 1; i <= limit; i++) {
        console.log(i % 2 === 0 ? `${i} is even` : `${i} is odd`);
    }
}

classifyNumbers(4); // This will print "4 is even"

// Snippet C: 
const formatName = (name) => name.trim().toUpperCase();

let rawInput = "  kelechi  ";
console.log(`Welcome, ${formatName(rawInput)}!`);
// Prints "Welcome KELECHI!"

// Part 4 - Collaborative Technical Challenge: 
// Build a complete "Order Checkout Program" that combines everything from this course:

// Get order details
const itemName = prompt("Enter item name:");
const itemPrice = Number(prompt("Enter item price:"));
const itemQuantity = Number(prompt("Enter the quantity:"));

// Function to calculate the subtotal
function calculateSubTotal(price, quantity) {
    return price * quantity;
};

// calculate subtotal
const subTotal = calculateSubTotal(itemPrice, itemQuantity);

// to determine free shipping
const freeShippingAmount = 2000;
const shippingFee = subTotal >= shippingAmount ? 0 : 500;

// calculate final total
const finalTotal = subTotal + shippingFee;

// receipt display
const receipt = `
=========== ORDER RECEIPT ===========

Item: ${itemName}
Price: ${itemPrice.toLocaleString()}
Quantity: ${itemQuantity}

subTotal: ${subTotal.toLocaleString()}
Shipping: ${shippingFee === 0 ? "FREE" : `#${shippingFee.toLocaleString()}`}

-----------------------------------------
TOTAL:  #${total.toLocaleString()}
`;

alert(receipt);
console.log(receipt);
}



