const { get } = require("prompt");

class person{
    constructor(name, city,address,age){
        this.name=name;
        this.city=city;
        this.address=address;
        this.age=age;
    }
//     display(){
//         console.log("hello " + this.name);   
//         console.log(this.city);
//         console.log(this.address);
//         console.log(this.age);}
// }

get person(){
    return `hello ${this.name} from ${this.city} and address is ${this.address} and age is ${this.age}`;
}

let person =new person("krushna", "pune","abc",22);
let person2 =new person("wavare", "mumbai","xyz",25);
let person3 =new person("krushna wavare", "nagpur","pqr",30);

console.log(person.person);
console.log(person2.person);
console.log(person3.person);
person3.display();


class student {
    constructor(name,age ,address,grade){
        this.name=name;
        this.age=age;
        this.address=address;
        this.grade=grade;
    }
    get info(){
        return `${this.name} is ${this.age} years old and lives at ${this.address}. His grade is ${this.grade}.`;
    }
}

let student1 =new student ("krushna",22,"pune","A");
let student2 =new student ("aditya",25,"mumbai","B");
console.log(student1.info);
console.log(student2.info);