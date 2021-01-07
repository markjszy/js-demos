/* software objects have exhibit *state* (attributes) and *behavior* (methods)
    like real-world objects do */

let dog = {
    breed: 'Border Collie', // state
    name: 'Tux', // state 
    age: 7, // state
    makeSound() { console.log('Bark'); }, // behavior
    getDescription() { return `${this.name} is a ${this.breed}, age ${this.age}`; } // "behavior"
}

dog.makeSound(); // behavior
console.log(dog.getDescription());

let cat = {
    breed: 'Persian',
    name: 'Willow',
    age: 2,
    makeSound() { console.log('Meow'); },
    getDescription() { return `${this.name} is a ${this.breed}, age ${this.age}`; }
}

// house is an object, with references to other objects, and can call the methods on those objects
let house = {
    pets: [dog, cat],
    getPetDescriptions() { this.pets.forEach(p => console.log(p.getDescription())) } // polymorphism
}

house.getPetDescriptions();

// JavaScript's prototypal inheritance and new `class` syntax 
// allow for more powerful OOP constructs that are covered in the other examples!