for(let i=0; i<5; i++){
    console.log(i);
}

let d = 0;
let e = 1;

console.log(a); 
console.log(b); 

for (let i = 2; i < 10; i++) {
  let next = a + b;
  console.log(next);
  a = b;
  b = next;
}

let a1 = 0;
let b = 0;
let c = 1;

console.log(a); // 0
console.log(b); // 0
console.log(c); // 1

for (let i = 3; i < 10; i++) {
  let next = a + b + c;
  console.log(next);

  // Slide all three variables forward
  a = b;
  b = c;
  c = next;
}
 

let a = 500;
// let num =1;

const prompt = require('prompt-sync')();
let num = parseInt(prompt("Enter a number: "));

for (let i = 0; i < num; i++) {
  a-=(i**3);
  console.log(a);
}


let base=500;

for (let i = 1; i < i; i++) {
  let cubes = i** 3;
  base = base - cubes ;
  console.log(base);
}


let n1=5;
let space1=" ";

for (let i=n1; i>=1; i--){  
    let row= space1.repeat(n1-i) + "*".repeat(i);


   for (let j=1; j<=i; j++){
            row += "*";
   }

console.log(row);
}



let n4 = 6;

for (let i = 1; i <= n4; i++) {
    let star = "";
    console.log("*")
    for (let j = 1; j <= i; j++) {
        star += "* ";
        }  
            console.log(star);
    }

let n =6;
let star="*";
let space=" ";

for (let i=1; i <=n; i++){
    console.log("*")
    for (let j=1; j<=i; j++){
        star += "*";
        space += " ";
    }
    console.log(space + star);
}



