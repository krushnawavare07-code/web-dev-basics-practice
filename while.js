i=0;

while(i<=10) {
    console.log(i);
    i++;
}


j=2;
let sum=0;
while(j<=20) {
    console.log(j);
    sum += j;
    j+=2;
}
console.log("Sum of even numbers from 2 to 20 is: " + sum);


let num=63463;
let rev=0
while(num>0) {
    rev = rev *10 + num %10;
    num = Math.floor(num/10);
}
console.log("Reversed number is: " + rev);
