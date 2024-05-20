const instaUser = new Object()
// console.log(instaUser);

instaUser.id = "siddg.upta"
instaUser.name = "Siddharth Gupta"
instaUser.isLoggedIn = true
instaUser.isVerified = false

// console.log(instaUser);

const rojkaUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname: {
            firstname: "Siddharth",
            lastname: "Gupta"
        }
    }
}

// console.log(rojkaUser.fullname.userfullname.firstname);

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj3 = Object.assign({}, obj1, obj2)

// console.log(obj3);

const obj4 = {...obj1, ...obj2, ...obj3}
console.log(obj4);

// jab values database ke pass se ati hain tab wo arrays of objects  ki form mein aati hain.

const users = [
    {
        id: 1,
        email: "naughty69@gmail.com"
    },
    {
        id: 2,
        email: "doggy69@gmail.com"
    }
]

users[0].email = "awesom69@gmail.com";

// console.log(users);
// console.log(instaUser);
console.log(Object.keys(instaUser));
// console.log(Object.keys(users));
console.log(Object.values(instaUser));
// console.log(Object.keys(obj2));
// console.log(Object.keys(obj4));
console.log(Object.entries(instaUser));

console.log(instaUser.hasOwnProperty('isoggedIn'));