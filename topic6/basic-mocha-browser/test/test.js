var expect = chai.expect;
var assert = chai.assert;
// note - in these examples we are doing all setup and any teardown in each 
// test case itself. There are more elegant ways to do this -- see 
// Mocha's "hooks" https://mochajs.org/#hooks

describe('Person', function() {
  describe('greeting', function() {
    it('should provide a reasonable greeting...', function() {
      let p = new Person('John', 'Smith', 'Kentucky');
      expect(p.getGreeting()).to.equal('John Smith sends greetings from Kentucky!');
    });
  });

  describe('pet behavior', function() {
    it('should be able to adopt valid pets of animal type', function() {
      let dog = new Pet('Tux', 'Dog');
      let cat = new Pet('Mr. Whiskers', 'Cat');
      let p = new Person('John', 'Smith', 'Kentucky');
      p.adoptPet(dog);
      p.adoptPet(cat);
      expect(p.pets).to.have.lengthOf(2);
      // just putting this in here to show how to test for type, if you want
      expect(p.pets[0]).to.be.an.instanceof(Pet);
    });

    it('should reject tigers', function() {
      let p = new Person('John', 'Smith', 'Kentucky');
      let stripey = new Pet('Mr. Whiskers Jr.', 'Tiger');
      expect(function() { p.adoptPet(stripey) }).to.throw(Error);
    });

    it('should reject penguins', function() {
      let p = new Person('John', 'Smith', 'Kentucky');
      let waddles = new Pet('Waddles', 'Penguin');
      expect(function() { p.adoptPet(waddles) }).to.throw(Error);
    });
  });
});