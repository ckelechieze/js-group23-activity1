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

// Part 4 
// Team work: Christian, Cornelius.

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


// Activity 3: The type detective Agency



// Part 4
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


// ======================================
// PART 4
// GRADE ROUNDER AND REPORTER
//Build a "Grade Rounder and Reporter" that asks for a student's exact numeric score, rounds it, and builds a message reporting the rounded score along with the student's name in all uppercase.

const studentName = prompt("Enter the student's name");
const studentScore = prompt("Enter the student's score");

const roundedScore = Math.round(studentScore);
const report = `student: ${studentName.toUpperCase()} Rounded Score: ${studentScore}`;

alert(report);
console.log(report);


