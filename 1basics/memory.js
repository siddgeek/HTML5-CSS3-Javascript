let name1 = "Siddharth"
let name2 = name1

 name2 = "Govind"

console.log(name1);
console.log(name2);

let userOne = { 
    email : "siddcode@gmail.com",
    mobileNo : 1234567890
}
let userTwo = userOne
userTwo.email = "sidddh@gmail.com"
userTwo.mobileNo = 9876543210
console.log(userTwo.email);
console.log(userTwo.mobileNo);
console.log(userOne.mobileNo);
console.log(userOne.email);