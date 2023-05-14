// Program to Check if a number is Positive, Negative, or Zero
const prompt=require('prompt-sync')()
const number = prompt("Enter a number: ");

if (number >= 0) {
    if (number == 0) {
        console.log("The number is zero");
    } else {
        console.log("The number is positive");
    }
} else {
    console.log("The number is negative");
}