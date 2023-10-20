class Prototype {
    counter = 0;
    increment() {
        this.counter += 1;
    }
    setCounter(number) {
        this.counter = number;
    }
    getCounter() {
        return this.counter;
    }
    clone() {
        return Object.create(this);
    }
}
const prototype = new Prototype();
prototype.setCounter(5);
const clonedPrototype = prototype.clone();
clonedPrototype.getCounter(); // 5
prototype.setCounter(15);
clonedPrototype.getCounter(); // 15
