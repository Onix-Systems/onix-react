// Create an object
const obj = { name: 'Onix' };

// Define a property using the Reflect API
Reflect.defineProperty(obj, 'age', {
  value: 23,
  writable: false,
});

// Get the value of a property using the Reflect API
const age = Reflect.get(obj, 'age');
console.log(age);

// Invoke a method using the Reflect API
Reflect.apply(console.log, console, ['Hello, world!']);
