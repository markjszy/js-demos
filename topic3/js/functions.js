// simple function *declaration*
function greeting() { 
    console.log('hello!');
    return 42;
}

greeting();

// parameters
function doStuff(stuff) {
    console.log(`You gave me ${stuff}`);
}

// pass by reference versus pass by value
function modifyThings(someObj, someNumber) {
    someObj.name = "Bill";
    someNumber += 1;
}

let anObj = {'name': 'John'};
let aNumber = 42;

modifyThings(anObj, aNumber); // anObj will be modified, but aNumber will not

function modifyArray(anArray) {
    if (anArray.length) {
        anArray[0] = "this is the new first item in the array you passed in"
    }
}

let myArray = [1,2,3,4];
modifyArray(myArray);
console.log(myArray);

// functions can access values in outer scope
let someHobby = "drawing";
function showHobbies() {
    someHobby += " this is an extra concatenation";
    console.log(someHobby);
}

// closures for custom additions
function customAdd(i) {
    function adder(x) {
        return x + i;
    }

    return adder;
}

// default values 
function incrementSomethingBy(something, by=1) {
    return something+by;
}

 // function expression

 //myBrandNewFunction(); // this will not work

 let myBrandNewFunction = function() {
     console.log('this is brand new!');
     return 1;
 }

//myBrandNewFunction(); // this will work
let cleanerFunction = () => { console.log('this is cleaner')};

// single param
let singleParamArrowFunction = myParam => { return myParam + 1 };

// multiple params
let multipleParamAddition = (myParam, anotherParam) => { return myParam + anotherParam };


// simple callback example
function iCallStuff(stuff) {
    console.log('about to call the function you gave me')
    stuff();
    console.log('I just called your function!')
}

iCallStuff(() => { console.log('I am a custom function')});