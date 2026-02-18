// const prompt = require("prompt-sync")({ sigint: true });

// let age = parseFloat(prompt("Enter your age: "));

// if (age >= 18) {
//     console.log("You are eligible to vote .");
// }else{
//     console.log("you are not eligible to vote .");
// }

const prompt = require("prompt-sync")({ sigint: true });

let year = parseFloat(prompt("Enter a year: "));

if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
    console.log(year + " is a leap year.");
} else {
    console.log(year + " is not a leap year.");
}