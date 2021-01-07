// Let's induce an error!
executeNonExistentFunction(); // ReferenceError

// Demo our try/catch/finally
try {
    executeNonExistentFunction();
} catch {
    console.log('A problem occurred!');
} finally {
    console.log('This will always execute, regardless of whether an exception was thrown');
}

// Errors are objects with specific types
try {
    executeNonExistentFunction();
    // JSON.parse('this is not valid JSON');
} catch(e) {
    if (e instanceof ReferenceError) {
        console.log('A reference error occurred!');
    }
    if (e instanceof SyntaxError) {
        console.log('A syntax error occurred!');
    }
} 

// You can throw errors yourself and include an optional message
try { 
    throw Error("I threw this error!");
} catch(e) {
    console.log(e.message);
}

// ES6 environments will allow you to subclass Error to define your own custom Errors
// see https://stackoverflow.com/questions/1382107/whats-a-good-way-to-extend-error-in-javascript for discussion
class MyCustomError extends Error {
    constructor(message) {
        super(message);
        this.name = 'MyCustomError';
    }
}

try {
    throw MyCustomError("this is a custom error!");
} catch (e) {
    if (e instanceof MyCustomError) {
        console.log("custom error was thrown!");
    }
}