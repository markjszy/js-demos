// inheritance allows you to define or use a hierarchy of types
class Polygon {
    constructor(height, width) {
      this.name = 'Polygon';
      this.height = height;
      this.width = width;
    }
  
    describeSelf() {
        console.log(`I am a ${this.name}`);
    }
}

const myPoly = new Polygon(3, 4);
myPoly.describeSelf();

class Square extends Polygon {
    constructor(length) {
      super(length, length);
      // you'll get a reference error if you try to use `this` before
      // calling `super(...)`!
      this.name = 'Square';
    }
  
    getArea() {
      return this.height * this.width;
    }

    // you can use `super` in the subclass to refer to ancestor properties or methods
    describeVerbosely() {
        console.log(`${this.name}, about to call ancestor's function...`);
        super.describeSelf();
    }
}

const mySquare = new Square(4);
mySquare.describeSelf(); // this will call the method defined in the parent class!

// power of inheritance and polymorphism...imagine you have client code 
// that expects polygons, doesn't care about specific  type, and wants to rely on
// the common polygon interface....
const myShapes = [mySquare, myPoly];
myShapes.forEach(p => p.describeSelf());