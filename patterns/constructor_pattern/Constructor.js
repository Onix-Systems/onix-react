function Tree(name, height, scientificname) {
  this.name = name;
  this.height = height;
  // Declaring a method
  this.getData = function() {
    return this.name + ' has a height of ' + this.height;
  };
}

const Coconut = new Tree('coconut', '40m', 'Fiji Dwarf');
console.log(Coconut.getData());  // coconut has a height of 40m
