// promises provide syntactic sugar plus additional guarantees that
// make it easier to deal with asynchronous function calls


// // without promises
// someAsyncFunction((success, fail) => {
//     if (success) {
//         // do something
//     }
//     else if (fail) {
//         // do something
//     }
// });

// {
//     {
//         {
//             {
//                 {
//                     {

//                     }
//                 }
//             }
//         }
//     }
// }

// // with promises
// someAsyncFunction()
//     .then(success, fail)
//     .then(success, fail)
//     .catch(/* ... */);


// illustration of a simple function returning a promise
function incrementer(x) { 
    return new Promise((a, b) => {
        // resolve(x + 1);
        b('Something bad happened')
    });
}

incrementer(45)
    .then(val => { console.log(val); 
        return 454; })
    .then(val2 => { console.log(val2); })
    .catch(err => { console.log(err)});