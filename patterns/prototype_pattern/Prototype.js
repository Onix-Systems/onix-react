class Prototype {
    greeting = "Hello!";
    
    greet() {
        console.log(this.greeting);
    }
    
    clone() {
        return new this.constructor();
    }

    description = "This is a prototype class with a default greeting and a method to clone itself.";
}

const prototype = new Prototype();
console.log(prototype.description);
// This is a prototype class with a default greeting and a method to clone itself.
prototype.greet(); // Hello!
const clonedPrototype = prototype.clone();
console.log("Cloned instance's greeting:");
// Cloned instance's greeting:
clonedPrototype.greet(); // Hello!
