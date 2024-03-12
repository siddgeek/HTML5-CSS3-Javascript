const user = {
    username: "Siddharth",
    price: 999,

    welcomeMessage: function() {
        console.log(`${this.username} , welcome to Heaven`);
        console.log(this);
    }

}

// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()

console.log(this);


function coffee()
{
    const username = "Siddharth"
    console.log(this.username);
}
coffee()

const chai = function(){
    let username = "Siddd"
    console.log(this.username);
}
chai()

//const first = () => In arrow function we hust write the arrow after the () rather than function before the ()
const lassi = () => {
    let username = "Siddd"
    console.log(this.username);
}
lassi()

// const addTwo= (num1, num2) => {
//     return num1 + num2 
// }
// console.log(addTwo(9, 8));

// //there is one more way of writing the arrow function implicitly.
// const addTwo= (num1, num2) =>  num1 + num2 
// console.log(addTwo(9, 8));
const addTwo= (num1, num2) =>  num1 + num2 
console.log(addTwo(9, 8));



// const myArray = [2, 5, 3, 7, 8]

// myArray.forEach()