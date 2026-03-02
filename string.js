let name ="krushna";
let result=` welcome to NIIT ${name}`;
console.log(result);

console.log(name.length);

console.log(name.toUpperCase());
console.log(name.toLowerCase());

console.log(name.indexOf("h"))

// slice
console.log(name.slice(0,3));

// replace
console.log(name.replace("krushna","wavare"));

// character at index
console.log(name.charAt(0));
console.log(name.charAt(4));

console.log(name.startsWith("kru"));
console.log(name.endsWith(" na"));
// concat

let str1="hello";
let str2="world";
console.log(str1.concat(" ",str2));
console.log(str1+ "   " + str2);
console.log(`${str1} ${str2}`);

// escape character
console.log("he said , \"hello world\"");

// string comparison 
let str3="hello";
let str4="hello";

console.log(str3==str4); //compares if strings have same value
console.log(str3===str4); //compares if strings have same value and type
