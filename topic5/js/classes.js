// class definitions allow you to define new types, with a blueprint provided by that class definition
// let's define the most basic class you could possibly have:
class A {} // exciting!

const myInstance = new A();

myInstance instanceof A; // returns true; see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/instanceof

// quick interlude....prototypes and prototypal inheritance in JS
Object.getPrototypeOf(a)===A.prototype // returns true; for  optional advanced reading, see https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/Object_prototypes

// more substantive class, with a constructor
class Person {
    constructor(name, city) {
        this.name = name;
        this.city = city;
    }

    getGreeting() {
        console.log(`${this.name} says hello from ${this.city}!`);
    }
}

const p = new Person("Bill", "Philadelphia");
console.log(p.getGreeting());

// by the way, classes are actually special functions...
Person instanceof Function // returns true

// also, methods are not defined on the object instance but on the prototype
Object.getOwnPropertyNames(p); // note this does *not* include `getGreeting` in the returned array!

