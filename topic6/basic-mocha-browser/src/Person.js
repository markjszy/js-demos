class Person {
    constructor(firstName, lastName, location) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.location = location;
        this.pets = [];
    }

    getGreeting() {
        return `${this.firstName} ${this.lastName} sends greetings from ${this.location}!`;
    }

    adoptPet(pet) {
        if (pet.species === 'Tiger' || pet.species === 'Penguin') {
            throw new Error('Not an appropriate pet!');
        } else {
            this.pets.push(pet);
        }
    }
}