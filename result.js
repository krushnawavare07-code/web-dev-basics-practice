const prompt = require('prompt-sync')();
let subjects = parseInt(prompt("Enter a number of subjects: "));

let marks = [];
for (let i = 0; i < subjects; i++) {
    let mark = parseInt(prompt(`Enter marks for subject ${i + 1}: `));
    marks.push(mark);
}



let totalmarks =0;
let passcount = 0;
let failcount = 0;

for (let i = 0; i < marks.length; i++) {
    totalmarks += marks[i]; 
}
// console.log(totalmarks);

if (totalmarks>=400) {
    passcount++;
}
else{
    failcount++;
}

console.log("total marks : " + totalmarks);
console.log("total passed subjects :" + passcount);
console.log("total failed subjects :" + failcount);

