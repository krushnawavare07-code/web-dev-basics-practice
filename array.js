// let num=[1,2,43,5,3];

console.log(num[4]);
console.log(num[4]=100)

console.log(num);

console.log(num.length);

for(let i=0; i<3; i++){
    console.log(num[i]);
}

console.log(num.indexOf(100));

slice(4,5);
console.log(num);

const result=num.slice(0,3);
console.log(result);

const sliced=num.splice();


let num=[45,78,90,34,67];

num.push(85);
console.log(num);

num.pop(85);
console.log(num);

num.unshift(50);
console.log(num);

num.shift(50);
console.log(num);

// has 90 

console.log(num.indexOf(78))

console.log(num.splice(78,90));

console.log(num.slice(1,2));

const doubled=num.map(num=>num * 2);
console.log(doubled);

const total = num.reduce((sum, current) => sum + current, 0);
console.log(total);

let items=["banana","apple","grape","orange"];

console.log(items.pop("banana"));
console.log(items);

items.push("kiwi");
console.log(items);

let items=[];

const prompt = require("prompt-sync")();
let option = parseInt(prompt("Enter 1 to remove an item, 2 to add an item: "));

let itemName = prompt("Enter the name of the item: ");

if (option === 1) {
      items.pop(itemName);
      console.log(items);   
}
else if (option === 2) {
    items.push(itemName);
    console.log(items);
}
else {
    console.log("invalid option");
}

let evenNumbers = [];

let num=[];
const prompt =require("prompt-sync")();
let num1 = parseInt(prompt("Enter a numbers: "));

function checkEven(num1){
if (num1 % 2==0){
    num.push(num1);
    console.log(num);
}else
    {
    num.pop();
}
}

checkEven(num1);





