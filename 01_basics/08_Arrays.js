// arrays

const myArr = [0,1,2,3,4,5]
const myHeros = ["Pratham", "Manju"]

const myArr2 = new Array(7,5,2,6)
// console.log(myArr[2]);

// Array methods

// myArr.push(6)
// myArr.push(7)
// myArr.pop()
// myArr.unshift(0)
// myArr.shift()

// console.log(myArr.includes(9));
// console.log(myArr.indexOf(3));

// const newArr = myArr.join()   // convert array into string
// console.log(newArr);
// console.log(typeof newArr);
// console.log(myArr);

// slice, splice

console.log("A " , myArr);

const myn1 = myArr.slice(1,3) //returns a copy of section of an array

console.log(myn1);
console.log("B ", myArr);

const myn2 = myArr.splice(1,3)
console.log("C ", myArr);
console.log(myn2);

// Difference between slice and splice
// slice returns a piece of array but does not affect the original array
// splice changes the original array by removing the affected values


