// forms of arrow functions: "syntactic sugar"
// 1. no parameters
const myFunctionWithNoParams = () => { console.log('this function takes no parameters'); }
// 2. just one parameter
const myFunctionWithOneParam = a => { console.log(a); }
// 3. multiple parameters
const myFuncWithMultipleParams = (a, b) => { console.log(a); console.log(b); }

// another traditional way to write a function expression
const traditionalFunc = function() { console.log('this function takes no params'); }
/*
myFunctionWithOneParam(42);
traditionalFunc();
*/

// no braces implies that the expression is to be returned as the return value for the function
const incrementer = a => a + 1;

// if you use braces, it's like a classic function expression and you do need to supply `return` to return a value
const incrementer = a => {return  a + 1 };
console.log(incrementer(43));

// function definition/declaration v. "expression"
// everything above uses function expressions. This below is a function declaration:
function myDeclaredFunction() {
    return 'this is a greeting from declared function';
}

