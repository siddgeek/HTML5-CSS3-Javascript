const mysym = Symbol("Key1");
const mysym1 = Symbol("Key2");

const JsUser = {
    name: "Siddharth Gupta",
    age: 21,
    UID: "21BCS5867",
    email: "sidddh26@gmail.com",
    isLoggedIn: false,
    lastLoginDay: ["Monday", "Saturday"],
    "address": "Sushil Studio, Khutar Road, Kheri",
    "Basics need": "Employment",
    [mysym]: "Key1",
    mysym1: "key2"
};

// console.log(JsUser.UID);
// console.log(JsUser.name);
// console.log(JsUser.email);
// console.log(JsUser.age);
// console.log(JsUser.address);
// console.log(JsUser["address"]);
// console.log(JsUser["Basics need"]);
// console.log(typeof JsUser.mysym);
// console.log(typeof JsUser.mysym1);
JsUser.greeting = function () {
    console.log("hey there");
}
JsUser.greeting1 = function () {
    console.log(`hey there, ${this.name}`);
}
console.log(JsUser.greeting);
console.log(JsUser.greeting());
console.log(JsUser.greeting1());