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