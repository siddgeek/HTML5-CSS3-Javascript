//Rest Operator
function calculateCartPrice(...num1) {
    return num1
}
console.log(calculateCartPrice(13, 234, 456, 345, 400));

function calculateECartPrice(val1, val2, ...num1) {
    return num1
}
console.log(calculateECartPrice(13, 234, 456, 345, 400));

const user ={
    userName: "Siddharth",
    price: 123
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.userName} & Price is ${anyobject.price}`);
}
handleObject(user)
handleObject({
    userName: "Ritesh",
    price: 4321
})

const myArray = [12, 23, 345, 43]
function returnSecondValue(getArray){
    return getArray[1]
}
console.log(returnSecondValue(myArray));
console.log(returnSecondValue([123, 234, 345, 3453]));