/**
 * Synchronous callbacks
 */
function iWillCallAnythingYouGiveMe(callback) {
    callback();
}

function greetTheUser() {
    console.log('hello there!');
}

// iWillCallAnythingYouGiveMe(greetTheUser);
// // delay utility
// console.log('this is another function call');


// let myArray = [4,5,6];
// let mySquared = myArray.map(x => x * x);
// console.log(mySquared);

/**
 * Asynchronous callbacks
 */
setTimeout(() => { console.log('this was delayed....hopefully')}, 0);
console.log('this will get executed first')

let x = 0;
let myIntervalId = setInterval(() => { 
    if (x < 5) {
        console.log(`this is being repeated: ${x}`);
        x++;
    } else {
        clearInterval(myIntervalId);
    }
}, 100);
console.log('does this get executed second?')

// let a = 0;
// let timerId = setInterval(() => {
//     console.log(`${a} is the new val for a`);
//     a++;
//     if (a > 5) {
//         clearInterval(timerId);
//     }
// }, 1000);