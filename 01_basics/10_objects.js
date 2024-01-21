// singleton 

// object literals
// Object.create // constructor method

const mySym = Symbol("key1") 

const JsUser = {
    name: "Pratham",
    "full name": "Pratham Chaudhary",
    [mySym]: "mykey1",
    age: 22,
    location: "Kharar", 
    email: "pratham@google.com",
    isLoggedIn: false
}
// console.log(JsUser.email);
// console.log(JsUser["email"]);
// console.log(JsUser["full name"]);
// console.log(JsUser[mySym]);

JsUser.email = "Prtham@gmail.com" //changing the value
// Object.freeze(JsUser) 

// console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello JS user");
}

JsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`);
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());