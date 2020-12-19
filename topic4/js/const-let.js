// var, let, and const

// key differences: scope, reassignment
// let and const are block-scoped
// var is not block-scoped (function scoped, and if not in a function, is global)
// var and let will allow reassignment/modification, while const will not

// order of preference: const, then let, then var

const x = 42;
{ 
    const x = 56;
    // x = 76; // this is not allowed
}
/*
let y = 75;
{
    let y = 56;
    console.log(y);
    y = 67;
    console.log(67);
}
console.log(y);
*/
// const behavior with reference v value types (value is basically akin to 'primitive')
const mySimpleVal = [1,23,4];
mySimpleVal[2]=56;
mySimpleVal[3]=75;
mySimpleVal[10]=100;
// console.log(mySimpleVal);

// difference between function scope and block scope
function myVarContainer() {
    {
        var hiddenVar = 56;
    }
    function nested() {
        console.log(hiddenVar);
    }

    return nested;
}
let mynested = myVarContainer();
mynested();
