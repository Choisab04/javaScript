// if
// <,  >,  <=(2<=2),  >=,  ==, !=,  ===(also check the data type)

// if(condition == true){
//     // code will execute
// }
// if(condition == false){
//     // code will not execute
// }

// if(2 === '2'){
//     console.log("executed");
// }

// const temperature = 41
// if( temperature < 50){
//     console.log("less than 50");
// }else{
//     console.log("Temperature is greater than 50");
// }


// const score = 200

// if(score > 100 ){
//     const power = "fly"
//     console.log(`User power: ${power}`);
// }


// const balance = 600
// if(balance < 500){
//     console.log("less than 500");

// } else if(balance < 750){
//     console.log("less tha 750");

// }else if(balance< 900){
//     console.log("less than 900");

// }else{
//     console.log("less than 1200");
// }

const userLoggedIn = true
const debitCard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true

if( userLoggedIn && debitCard ){ // &&- and
    console.log("Allow user to buy the course");
}

if(loggedInFromGoogle || loggedInFromEmail){  // ||-or
    console.log("User logged in");
}

