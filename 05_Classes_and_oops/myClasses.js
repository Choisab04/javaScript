// // class user{
//     constructor(username, email, password){
//         this.username = username;
//         this.email = email;
//         this.password = password;
//     }

//     encryptPassword(){
//         return `${this.password}abc`
//     }

//     changeUsername(){
//         return `${this.username.toUpperCase()}`
//     }
// }

// const chai = new user("Pratham", "pc@gmail.com", "1234")

// console.log(chai.encryptPassword());
// console.log(chai.changeUsername());


// BTS

function user(username, email, password){
    this.username = username;
    this.email = email;
    this.password = password;
}

user.prototype.encryptPassword = function(){
    return `${this.password}abc`
}
user.prototype.changeUsername = function(){
    return `${this.username.toUpperCase()}`
}

const chai = new user("Pratham", "pc@gmail.com", "1234")

console.log(chai.encryptPassword());
console.log(chai.changeUsername());