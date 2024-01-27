let myName = "Pratham     "
let myChannel = "Choi     "

// console.log(myName.trueLength());

 
let myHero = ["thor", "spiderman"]

let heroPower = {
    thor: "hammer",
    spiderman : "sling",

    getSpiderPower : function(){
        console.log(`spiderman power is ${this.spiderman}`);
    }
}


Object.prototype.pratham = function(){
    console.log(`Pratham is present in all objects`);
}

// Array.prototype.heyPratham = function(){
//     console.log(`Pratham says hello`);
// } 

// heroPower.pratham()
// myHero.pratham()

// myHero.heyPratham()
// heroPower.heyPratham()


//Inheritence

const user = {
    name: "chai",
    email: "chai@google.com"
}

const teacher = {
    makeVideo: true
}

const teachingSupport = {
    isAvailable: false
}

const TAsupport = {
    makeAssignment: 'js assignment',
    fulltime: true,
    __proto__: teachingSupport
}

teacher.__proto__ = user

// modern syntax
Object.setPrototypeOf(teachingSupport, teacher)

let anotherUsername = "Pratham   "

String.prototype.trueLength = function(){
    console.log(`${this}`);
    console.log(`True length is: ${this.trim().length}`);
}

anotherUsername.trueLength()
"Chaudhary  ".trueLength()