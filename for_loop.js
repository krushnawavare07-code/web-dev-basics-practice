// for(let i=0; i<5; i++){
//     console.log(i);
// }

// let a = 0;
// let b = 1;

// console.log(a); 
// console.log(b); 

// for (let i = 2; i < 10; i++) {
//   let next = a + b;
//   console.log(next);
//   a = b;
//   b = next;
// }

let a = 0;
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
