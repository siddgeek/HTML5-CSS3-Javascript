const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

let newNums = myNums.map( (num) => num + 10 )
console.log(newNums);

//chaining

newNums = myNums.map( (num) => num * 10 ).map( (num) => num +1 )

console.log(newNums)

let newwNums = myNums.map( (nums) => nums * 100 ).filter( (nums) => nums >= 400 )
console.log(newwNums)