const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// let myTotal = myNums.reduce(function(acc, currValue){ 
//     console.log(`acc: ${acc} & currvalue: ${currValue}`);
//     return currValue + acc }, 0)
// console.log(myTotal);


let myTotal = myNums.reduce((acc, currval) => acc + currval , 0)
console.log(myTotal);

const shoppingCart = [
    {
        itemName: "js course",
        price: 999
    },
    {
        itemName: "cpp course",
        price: 899
    },
    {
        itemName: "c# course",
        price: 1199
    }
]

let totalPrice = shoppingCart.reduce((acc, item) => acc + item.price, 0)
console.log(totalPrice);