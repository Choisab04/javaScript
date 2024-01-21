
function sayMyName(){
    console.log("P");
    console.log("R");
    console.log("A");
    console.log("T");
    console.log("H");
    console.log("A");
    console.log("M");
} 

// sayMyName()

// function addTwoNumbers(number1, number2){
//     console.log(number1 + number2);
// }

function addTwoNumbers(number1, number2){
     let result = number1 + number2
     return result
}

// addTwoNumbers(3, 4)

const result = addTwoNumbers(5,3)

// console.log(result);

function loginUserMsg(username = "Choi"){ // default value
    if(username == undefined){
        console.log("Please enter a username");
        return
    }
    return `${username} just logged in`
}

// console.log(loginUserMsg("Pratham"));
// console.log(loginUserMsg());

function calculateCartPrice(...num1){ // rest operator
    return num1
} 

// console.log(calculateCartPrice(200, 400, 500, 2000));

const user = {
    username: "Pratham", 
    price: 199
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}

// handleObject(user)
handleObject({
    username: "Pratham", 
    price: 199
})

const myNewArray = [200, 400, 100, 700]

function returnSecondValue(getArray){
    return getArray[1]
}
 console.log(returnSecondValue(myNewArray));