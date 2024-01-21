const coding = ["js", "ruby", "java", "python", "cpp"]

// coding.forEach( function (val) {
//     // console.log(val);
// } )

// coding.forEach(element => {
//     console.log(element);
// });

// function printMe (item){
//     console.log(item);
// }
// coding.forEach( printMe)


// coding.forEach( (item, index, arr) => {
//     console.log(item, index, arr);
// })

const myCoding = [
    {
        langName: 'Javascript',
        langFile: 'js'
    },
    
    {
        langName: 'Java',
        langFile: 'java'
    },
    
    {
        langName: 'python',
        langFile: 'py'
    }
]

myCoding.forEach( (item) => {
    console.log(item.langName);
} )