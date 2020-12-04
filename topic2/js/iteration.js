// Video: `for` `while`, `do while`; `for...in`, `for ... of`

// for loop

// for (let i = 0; i < 10; i++) {
//     console.log(i);
// }

// interlude: increment and decrement
// let a = 10;
// let b = 10;

// console.log(a++);
// console.log(++b);
// console.log(a);
// console.log(b);

// infinite loop -runs forever - not recommended to actually run
/*
for (;;) {
    // do something
    console.log('this is an infinite loop!');
}*/

// while 
/*
let i = 0;
while (i < 10) {
    if (i == 5) {
        continue;
    }
    console.log(i);
    i++;
} */

/*
do {
    console.log('this will execute at least once')
} while(false);
*/
// for .. in and for ..of 
let  myArray = [
    "one",
    "two",
    "three"
]

for (let i in myArray) {
    console.log(i);
}

console.log("========")

for (let i of myArray) {
    console.log(i);
}