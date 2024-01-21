const user = {
    username: "Pratham",
    price: 999,

    welcomeMessage: function(){
        console.log(`${this.username} , welcome to  website`); // this talks about current values
        console.log(this);
    }
}

// user.welcomeMessage()
// user.username = "Choi"
// user.welcomeMessage()

// console.log(this);

// function one(){
//     let username = "Pratham"
//     console.log(this.username);
// }
// one()

const one = () => {
    let username = "Pratham"
    console.log(this);
}

// one()


// const addTwo = (num1, num2) => {
//     return num1 + num2 // explicit return
// }

const addTwo = (num1, num2) => num1 + num2 //implicit return

console.log(addTwo(4, 5));

