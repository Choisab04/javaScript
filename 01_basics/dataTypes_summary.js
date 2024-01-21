// Primitive

// 7 Types: String, Number, Boolean, Null, Undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

const bigNumber = 1283749509



//Non-Primitive: These are derived from primitive data types

// Array, Objects, Functions

const heros = ["Pratham", "Choisab", "Nauhwar"]
let myObj = {
    name: "Pratham",
    age: 22,
}



//Function

const myFunction = function(){
    console.log("Hello World");
}

console.log(typeof bigNumber);


// ******************************************

// Stack (Primitive), Heap (Non-Primitive)

let myYoutubename = "Prathamchaudharydotcom"

let anotherName = myYoutubename
anotherName = "chaiaurcode"

console.log(anotherName);
console.log(myYoutubename);

let userOne = {
    email: "userone@gmail.com",
    upi : "user@sbi"
}

let userTwo = userOne

userTwo.email = "Pratham@gmail.com"

console.log(userOne);
console.log(userTwo);