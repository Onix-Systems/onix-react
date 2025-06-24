// Define a generator function
function* fibonacci() {
  let a = 0, b = 1;
  while (true) {
    yield b;
    [a, b] = [b, a + b];
  }
}

// Use the generator to generate an infinite sequence
const sequence = fibonacci();
console.log(sequence.next().value);
console.log(sequence.next().value);
console.log(sequence.next().value);
