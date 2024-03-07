const JsUser = {
    name: "Siddharth Gupta",
    age: 21,
    UID: "21BCS5867",
    email: "sidddh26@gmail.com",
    isLoggedIn: false,
    lastLoginDay: ["Monday","Saturday"],
    "address": "Sushil Studio, Khutar Road, Kheri",
    "Basics need": "Employement"
}
console.log(JsUser.UID);
console.log(JsUser.name);
console.log(JsUser.email);
console.log(JsUser.age);
console.log(JsUser.address);
console.log(JsUser["address"]);
console.log(JsUser["Basics need"]);