let counter = 0;
 
class Counter {
  getInstance() {
    return this;
  }
 
  getCount() {
    return counter;
  }
 
  increment() {
    return ++counter;
  }
 
  decrement() {
    return --counter;
  }
}
 
const counter1 = new Counter();
const counter2 = new Counter();
 
console.log(counter1.getInstance() === counter2.getInstance()); // False

counter1.increment();

console.log(counter1.getCount() === counter2.getCount()); // True
