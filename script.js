// Welcome program that greets the user by name and tells them the year they were born based on their age input.

// Activity 1: The Digital Memory Box
// Predict the Output

// Snippet A
let age = 25;
console.log(age);

age = "twenty-five";
console.log(age);

// Snippet B
const isRaining = true;
console.log("Is it raining? " + isRaining);

// Snippet C
let favoriteNumber;
console.log(favoriteNumber);

// Part 3: Debugging Challenge
let userName = "Amara";
console.log(userName);

const favoriteColor = "blue";
console.log(favoriteColor);


let userName = prompt("What is your name?");
let age = prompt("How old are you?");

let birthYear = 2026 - age;
let favoriteHobby = prompt("What is your favorite hobby?");

alert(`Hello, ${userName}! You were born in ${birthYear}, and your favorite hobby is ${favoriteHobby}.`);


console.log("girl & " + "boy"); 

console.log("1 " + "2 " + "3 ");

// Activity 2: Building Sentences with Code

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

// Part 3: Debugging Challenge
// will be done by Christian
// 1
let firstName = "Tunde";
let lastName = "Okafor";
let fullName = firstName + " " + lastName;
console.log("Welcome " + fullName + "!");

// 2
let itemPrice = "15";
let total = itemPrice + 5;
console.log(`Your total is $${total}`);


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


// Activity 3: The Type Detective Agency
// part 2: Predict the output
// Snippet A
let input1 = "42";
let converted = Number(input);
console.log(input1 + 8);
console.log(converted + 8);

// Snippet B
let name = "  Chidinma  ";
console.log(name.trim());
console.log(name.length);

// Snippet C
let word = "JavaScript";
console.log(word.toUpperCase());
console.log(word);

// Part 3: Debugging Challenge
// 1
let userAge = prompt("Enter your age:");
let nextYearAge = Number(userAge) + 1;
// ********************************************************************** (Number added)*******
console.log("Next year you will be " + nextYearAge);

// 2
let city = "lagos";
console.log(city.toUpperCase()); 
// ToUpperCase() wrong

// Part 4
// Collaborative Technical Challenge
//Build a "Username Generator" that asks for a person's first name and favorite number, converts the number properly, and creates a username by combining the lowercase first name with the number.

const firstName = prompt("What is your first name?");
const favoriteNumber = Number(prompt("Enter your favorite number"));

alert(`Your username is: ${firstName.toLocaleLowerCase().trim()}${favoriteNumber}`)

// Activity 4: Text and Numbers
// Part 2: Predict the output
// Snippet A
console.log(Math.random(4.5));
console.log(Math.floor(4.9));
console.log(Math.ceil(4.1));

// Snippet B
let phrase = "I love JavaScript";
console.log(phrase.includes("love"));
console.log(phrase.split(" "));

// Snippet C
let num = 7;
console.log(Math.max(num, 10, 3));
console.log(Math.min(num, 10, 3));

// part 3: Debugging Challenge
let score = 87.6;
let rounded = Math.round(score);
console.log("Rounded score: " + rounded);

let sentence = "Learning to code is fun"
let firstWord = sentence.split(" ")[0];
console.log(firstWord);

// Part 4: Collaborative Technical Challenge



// Activity 5: Decision Makers

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

// Snippet B
let age = 20;
let hasID = false;
if (age >= 18 && hasID) {
    console.log("You may enter.");
} else {
    console.log("Entry denied.");
}

// Snippet C
let password = "1234";
if (password === "0000") {
    console.log("Password is changed!.");
} else {
    console.log("No change.");
}

// Part 3: Debugging Challenge
if (hour < 12) {
    console.log("Good morning!");
} else if (hour < 18) {
    console.log("Good afternoon!");
} else {
    console.log("Good evening!");
}

// part 4: Collaborative Technical Challenge

// Activity 6: Shortcuts and Choices
// part 2: Predict the output
// Snippet A
let score = 72;
let result = score >= 50 ? "Pass" : "Fail";
console.log(result);

// Snippet B
let cartTotal = 0;
let message = cartTotal === 0 ? "Proceed to checkout" : "Your cart is empty";
console.log(message);

// Snippet C
let stock = 5;
console.log(`Stock status: ${stock > 0 ? "Available" : "Out of stock"}`);

// Part 3: Debugging Challenge
let temperature = 28;
let feeling = temperature > 25 ? "hot" : "cool";
console.log(feeling);

let isMember = true;
let discount = isMember ? 10 : 0;
console.log(`Discount: ${discount}%`);

// Activity 7: Repeat After Me
// part 2: Predict the output
// Snippet A

for (let i = 0; i < 3; i++) {
    console.log(i);
}

// Snippet B
let count = 3;
while (count > 0) {
    console.log(`Countdown: ${count}`);
    count--;
}
console.log("Liftoff!");

// Snippet C
for (let i = 0; i < 10; i = i + 2) {
    console.log(i);
}

// Part 3: Debugging Challenge
// 1
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

// Activity 8: Reusable Machines