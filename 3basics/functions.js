function myName() {
    console.log("Siddarth");
    console.log("Gupta");
}

// myName()
// myName(1)

function addTwoNum(Num1, Num2) {//isme jo val pass ho rhi hain wo
    console.log(Num1 + Num2);//parameters hain.
}
function addTwoNum(Num1, Num2) {
    // let result = Num1 + Num2
    // return result
    return Num1 + Num2
}

addTwoNum(6, 34)  // is mein jo values pass ho rhi hai wo
addTwoNum(6, "34")// arguments hain.
addTwoNum(6, "a")
addTwoNum(6, null)
 const result = addTwoNum(3, 4)
 console.log("Result", result);

function loginUserMessage(username = `Sidd`) {//agar yahn pe kuch assigned hoga to vo if kabhi execute krega hi nhi aur to uski value ko override krdega.
    if(username === undefined)//if(!username)
        {
            console.log(`Please enter valid username`);
            return 
        }
    return `${username} just logged in`
 }

 console.log(loginUserMessage(`Siddharth`))
 console.log(loginUserMessage(``))
 console.log(loginUserMessage())
 // Whenever we dosen't pass any value then it gives undefined not null 
