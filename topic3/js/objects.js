let dog = {
    name: 'tux',
    breed: 'border collie',
    location: {
        x: 23,
        y: 45
    },
    getDescription: function() {
        return `${this.name} is a ${this.breed}`;
    },
    getAnotherDescription() {
        return `${this.name} is a ${this.breed}`;
    },
    getNaiveDescription: function() {
        // for illustrative purposes...don't actually do this; instead, use `this`!
        return `${dog.name} is a ${dog.breed}`;
    }
}


// function describeDog(dog) {
//     return `${dog.name} is a ${dog.breed}`;
// }

console.log(dog.getDescription());
console.log(dog.getAnotherDescription());
console.log(dog.getNaiveDescription());
console.log(dog.getArrowDescription());