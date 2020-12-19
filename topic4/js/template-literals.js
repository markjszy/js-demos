// strings in javascript -- can use single or double quotes
// or use backticks `` for template literal
let myOldFashionedString = 'this is a string';
console.log(myOldFashionedString);

// concatenation
let greeting = "hello";
let concatenated = "this\n" + 
             ' and\tthat\n' +
             ' and another\n' + greeting;
console.log(concatenated);

// using template literal instead
let myTemplate = `this
 and\tthat
 and another
 ${greeting}`; // interpolation

console.log(myTemplate);

console.log(`here is a template using a JS expression ${5 + 6}`);
