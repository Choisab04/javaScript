// var c = 300
let a = 100

if(true){
    let a = 10
    const b = 20
    // var c = 30
    // console.log(a);

}

// console.log(a);
// console.log(b);
// console.log(c);

//nested scope
function one(){
    const username = "Pratham"

    function two(){
        const website = "youtube"
        console.log(username);
    }
    // console.log(website);

    two()
}

// one()

if(true){
    const username = "Pratham"
    if(username == "Pratham"){
        const website = " youtube"
        // console.log(username + website);
    }
    // console.log(website);
}
// console.log(username);




//++++++++++++ interesting +++++++++++

addone(5)
console.log(addone(5));
function addone(num){
    return num + 1
}

// addone(5)
// console.log(addone(5));


console.log(addTwo(5));
const addTwo = function(num){
    return num + 2
}
// console.log(addTwo(5));
