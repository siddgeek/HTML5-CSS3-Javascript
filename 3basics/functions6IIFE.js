// function sidd() {
//     console.log("DataBase Connected");
// }
// sidd()

// now we'll use IIFE 
(function sidd() {
    console.log("DataBase Connected");
})();
//we use ; because function can be invoked easily but it doesn't where to stop the context.

(() => {
    console.log("DataBase Connected through arrow function");
})();
((name) => {
    console.log(`DataBase Connected through arrow function ${this.name}`);
})("siddharth");
// console.log(this.name);