// const process = require("node:process");

// let name = process.argv[2];
// console.log("Hello, " + name );

// const prompt =  require("prompt-sync")();

// let name =prompt("enter your name :");
// console.log("Hello, " + name);

// let n=prompt("enter a number :");

// for (let i=1; i<=n; i++){
//     console.log(i);
// }

const prompt = require("prompt-sync")({ sigint: true });

let num1 = parseFloat(prompt("Enter first number: "));
let num2 = parseFloat(prompt("Enter second number: "));

let operation = prompt("Enter operation (+, -, *, /): ");

switch (operation) {
    case "+":
        console.log("Result: " + (num1 + num2));
        break;
    case "-":
        console.log("Result: " + (num1 - num2));
        break;
    case "*":
        console.log("Result: " + (num1 * num2));
        break;
    case "/":
        if (num2 !== 0) {
            console.log("Result: " + (num1 / num2));
            break;
        } else {
            console.log("Error: Division by zero is not allowed.");
            break;
        }       
    default:
        console.log("Invalid operation. Please enter +, -, *, or /.");
}
