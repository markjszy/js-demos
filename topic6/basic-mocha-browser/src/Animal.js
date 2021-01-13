class Animal {
    constructor(species) {
        this.species = species;
    }
}

class Pet extends Animal {
    constructor(name, species) {
        super(species);
        this.name = name;
    }
}