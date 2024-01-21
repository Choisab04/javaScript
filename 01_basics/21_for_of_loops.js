// +++++++ for of loop +++++++

const arr = [1, 2, 3, 4, 5]

for (const num of arr) {
    // console.log(num);
}

const greetings = "Hello Choi"
for (const greet of greetings) {
    // console.log(greet);
}


//Maps

const map = new Map()
map.set('IN', "India")
map.set('USA', "United states of america")
map.set('FRN', "France")

// console.log(map);

for (const [key, value] of map) {
    // console.log(value);
}

const Myobj = {
    game1 : 'NFS',
    game2 : 'Spiderman',
    game3 : 'GTA-V'
}
// for (const [key, value] of Myobj) {
//     console.log(key, ':-', value);
// }