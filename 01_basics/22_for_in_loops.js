// ------ For in loop on objects -----
const myObj = {
    js: "javascript",
    cpp: "C++",
    rb: "ruby",
    swift: "swift by app"
}
for (const key in myObj) {
    // console.log(`${key} - ${myObj[key]}`);
}


// ------- For in loop on arrays -----
const arr = ['js', 'rb', 'py', 'java', 'cpp']
for (const key in arr) {
    // console.log(arr[key]);
}



// ------- For in loop on maps ------
// const map = new Map()
// map.set('IN', "India")
// map.set('USA', "United states of america")
// map.set('FRN', "France")
// for (const key in map) {
//     console.log(key);
// }  //Not iterable