const marvelHeros = ["Ironman","Antman","Thor"]
const dcHeros = ["Batman","Superman"]

// marvelHeros.push(dcHeros);
// console.log(marvelHeros);

const allHeros = marvelHeros.concat(dcHeros);
console.log(allHeros);

const bHeros = ["Akki","Salman","Shahrukh"]

//(...) => Spread operator used to join more than  array.
//concat makes no attempt to iterate the generator and appends it as a whole, while ... nicely fetches all values from it.

const saareHeros = [...bHeros,...dcHeros,...marvelHeros]
console.log(saareHeros);

const aRray = [1,2,3,[4,5,6,[7,8]],9,[10,11],12]

const anArray = aRray.flat(Infinity)
console.log(anArray);

console.log(Array.from("Siddharth"));
// console.log(Array.from("Siddharth","Gupta"));
// console.log(Array.from("1234567890");

console.log(Array.from({name: "sidd"}));
// isme wo samajh nhi oa rha ki kisko leke(keys ya values) array banana hai isliye empty array dega

let var1 = 20
let var3 = 20
let var2 = 20

console.log(Array.of(var1,var2,var3));
