// call stack demo
function a() {
    return;
}

function b() {
    a();
}

function c() {
    b();
}

c();

/*
class Person {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    logGreeting() {
        console.log(this.getGreeting());
    }

    getGreeting() {
        return `${this.firstName} ${this.lastName} saying hello!`;
    }

}

let people = [new Person("Jane", "Austen"), new Person("George", "Eliot"), new Person("Robert Caro")];

people.forEach(p => {
    p.logGreeting();
});
*/