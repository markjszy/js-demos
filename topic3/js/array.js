// array literal syntax...arrays can have heterogeneous types
let myValues = [5, 6, 7, "something else", false];

myValues[1];

// methods
function logValue(val) {
    console.log(val);
}

// example of forEach where the callback recognizes just one argument
myValues.forEach(function(val) { 
    console.log(val);
})

// example of forEach where callback recognizes multiple args (val, and the index of the element)
myValues.forEach((val, idx) => { console.log(val); console.log(idx); })
