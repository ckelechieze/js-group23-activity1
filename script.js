
// ACTIVITY 1 - THE DIGITAL MEMORY BOX
// ==========================================
// Welcome program that greets the user by name and tells them the year they were born based on their age input.
let userName = prompt("What is your name?");
let age = prompt("How old are you?");

let birthYear = 2026 - age;
let favoriteHobby = prompt("What is your favorite hobby?");

alert(`Hello, ${userName}! You were born in ${birthYear}, and your favorite hobby is ${favoriteHobby}.`);


console.log("girl & " + "boy"); 

console.log("1 " + "2 " + "3 ");

// Part 2: Predict the output
// Snippet A
let a = 10;
let b = "5";

console.log(a + b);
console.log(a - b);

// Snippet B
let price = 20;
let quantity = "3";
console.log(`Total cost: $${price * quantity}`);

// Snippet C
let x = 4;
let y = "2";
console.log("Result: " + (x + y));
console.log("Result: " + (x - y));

// Part 3
// will be done by Christian


// ACTIVITY 2
// BUILDING SENTENCES WITH CODES
//===============================================

//Build a "Receipt Generator" that asks the user for an item name, its price, and how many they're buying, then displays a formatted receipt line.

const itemName = prompt("What do you want to buy?");
const itemPrice = Number(prompt("Enter the price:"));
const itemQuantity = Number(prompt("How many do you want to buy?"));

const discount = 10;
const total = itemPrice * itemQuantity;
discountedAmount = total * (discount / 100);
const discountedPrice = Math.round(total - discountedAmount);

console.log(`You bought ${itemName} x ${itemQuantity} = #${total}`);

alert(`You bought ${itemName} x ${itemQuantity} = ₦${discountedPrice.toLocaleString()} with ${discount}% discount`);



// ACTIVITY 3 - TYPE DETECTIVE AGENCY =================================
// Collaborative Technical Challenge
//Build a "Username Generator" that asks for a person's first name and favorite number, converts the number properly, and creates a username by combining the lowercase first name with the number.

const firstName = prompt("What is your first name?");
const favoriteNumber = Number(prompt("Enter your favorite number"));

let usersName;

if (firstName.length > 8) {
    usersName = firstName.slice(0, 8);
} else {
    usersName = firstName;
}

alert(`Your username is: ${usersName.toLocaleLowerCase().trim()}${favoriteNumber}`)



// ACTIVITY 4 - TEXT AND NUMBERS
// ======================================
// GRADE ROUNDER AND REPORTER
//Build a "Grade Rounder and Reporter" that asks for a student's exact numeric score, rounds it, and builds a message reporting the rounded score along with the student's name in all uppercase.

const studentName = prompt("Enter the student's name").trim();
const studentScore = Number(prompt("Enter the student's score"));

const roundedScore = Math.round(studentScore);
const report = `student: ${studentName.toUpperCase()} Rounded Score: ${roundedScore}`;

alert(report);
console.log(report);


// ACTIVITY 5 - DECISION MAKERS
// ======================================
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


