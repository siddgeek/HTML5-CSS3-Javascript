const emptyobject = {}
if(Object.keys(emptyobject).length === 0){
    console.log("Empty Object");
}

//Nullish Coalescing Operator (??)
let handle1;
handle1 = 2 ?? 10
handle2 = null ?? 10
handle3 = undefined ?? 4 
console.log(handle1);
console.log(handle2);
console.log(handle3);