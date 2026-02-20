function add(a,b){
    console.log(a+b)
}

add(5,10);
add(20,30);
add("hello " ,"world");
add(10 ,"10");
add(20 , "20");

const prompt = require("prompt-sync")({ sigint: true });

let num = parseFloat(prompt("enter a number "));

function isprime(num) {
    if (num <= 1) {
        return false;
    }   
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            return false;
        }
    }
    return true;
}

function login(username,password){
    if(username === "krushna" && password ==="123456"){
        console.log("login successful")
}
else{
    console.log("login failed");
}
}

login("krushna","123456");

function welcome(name){
    console.log("welcome " + name);
}

function preccess(callback){
    const name ="krushna";
    callback(name);
}

preccess(welcome);

function foodorder(item,callback){
    setTimeout(() => {
        console.log("order placed for " + item);
        callback();
    }, 2000);
}

foodorder("pizza", function(){
    console.log("order delivered");
});

const input = require("prompt-sync")({ sigint: true });

let age = parseFloat(input("enter your age "));

function job(age){
    if(age < 18){
        console.log("you are not eligible for job");
    }else if(age >= 18 && age < 60){
        console.log("you are eligible for job");
    }else{
        console.log("you are retired");
    }
}
job(age);

