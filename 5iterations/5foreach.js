const myArr = ["Sidd", "Sam", "Gov", "Jack", "Mike"]

// myArr.forEach(function(name){
//     console.log(`Names are ${name}`);
// })
// console.log(`Names are ${myArr.forEach(function(name){
//     console.log(name);
// })}`)

// function printMe(item){
//     console.log(item);
// }
// myArr.forEach(printMe)

// myArr.forEach( (item) => {
//     console.log(item, index, arr);
// } )

const myCoding = [
    {
        languageName: "Javascript",
        languageFileName: "js"
    },
    {
        languageName: "Java",
        languageFileName: "java"
    },
    {
        languageName: "C++",
        languageFileName: "cpp"
    }
]

myCoding.forEach( (item) => {
    // console.log(item.languageName);
})
const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const value = myNums.forEach( (items) => {
//       return items
// })
// console.log(value);

const newNums = myNums.filter( (num) => num > 4)
console.log(newNums);

// const newNums = []

// myNums.forEach( (num) => {
//     if (num > 4) {
//         newNums.push(num)
//     }
// } )