const arr = [1, 2, 3, 4, 5]
for (const nums of arr) {
    // console.log(`Values of Arrays are ${nums}`);
}
const greeTings = "Hello World"
for (const greet of greeTings) {
    if(greet == " ") continue
    console.log(`characters of grreting are ${greet}`);
}

const map = new Map()
map.set('IN', "India")
map.set('USA', "United States of America")
map.set('Fr', "France")
map.set('IN', "India")


// console.log(map);

// for (const key of map) {
//     console.log(key);
// }
for (const [key, value] of map) {
    console.log(key, ":-", value);
}


// const myObject = {
//     game1: 'NFS',
//     game2: 'Spiderman'
// }

// for (const [key, value] of myObject) {
//     console.log(key, ':-', value);
    
// }