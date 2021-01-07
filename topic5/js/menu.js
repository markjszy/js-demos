// review of *skills* needed to understand the menu example
// and homework assignment...

// another example of custom types, behavior, relations among types...
// arrays as collections (see other code examples from this topic), basic array manip
class Plant {
    constructor() {
        this.commonName = 'generic plant...';
    }

    getDescription() { return `This plant is a ${this.commonName}`; }
}

class Sunflower extends Plant {
    constructor() {
        super();
        this.commonName = 'sunflower'
    }
}

class Milkweed extends Plant {
    constructor() {
        super();
        this.commonName = 'milkweed'
    }
}

class Chicory extends Plant {
    constructor() {
        super();
        this.commonName = 'chicory'
    }
}

class Greenhouse {
    constructor() {
        this.plants = [];
    }

    describeAll() {
        this.plants.forEach(p => { console.log(p.getDescription() )});
    }

    addPlantToShelf(plant) {
        this.plants.push(plant);
        return this; // enable some convenient chaining for the caller...
    }

    removePlantFromShelf(index) {
        this.plants.splice(index, 1);
        return this;
    }
}

let greenhouse = new Greenhouse();
greenhouse.describeAll(); // nothing yet, no plants!

greenhouse.addPlantToShelf(new Sunflower())
          .addPlantToShelf(new Chicory())
          .addPlantToShelf(new Milkweed())

greenhouse.removePlantFromShelf(1); // removes the chicory

// now for a skeletal menu system...
class Menu {
    constructor() {
        this.greenhouse = new Greenhouse();
    }

    showMainMenu() {
        return prompt(`What would you like to do?
            (0) Quit
            (1) Add a plant
            (2) Show all plants`);
    }

    init() {
        let input = this.showMainMenu();
        while (input != 0) {
            switch(input) {
                case '1':
                    this.addPlant();
                    break;
                case '2':
                    this.showAllPlants();
                    break;
                default: 
                    input = 0;
            }
            input = this.showMainMenu();
        }
    }

    addPlant() {
        let plantType = prompt(`Choose a plant type...
            (1) Sunflower
            (2) Chicory
            (3) Milkweed`)
        switch(plantType) {
            case '1': 
                this.greenhouse.addPlantToShelf(new Sunflower());
                break;
            case '2':
                this.greenhouse.addPlantToShelf(new Chicory());
                break;
            case '3':
                this.greenhouse.addPlantToShelf(new Milkweed());
                break;
        }
    }

    showAllPlants() {
        // advanced note -- it can be a code smell for code to reach deeply into other objects like
        // `this.greenhouse.plants....`. Consider how you might avoid this situation!
        // see Law of Demeter https://en.wikipedia.org/wiki/Law_of_Demeter
        alert(this.greenhouse.plants.map(p => p.commonName).join('\n'));
    }
}

let m = new Menu();
m.init();
