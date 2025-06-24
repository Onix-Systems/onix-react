// Define an iterable object
const obj = {
  data: [1, 2, 3, 4],
  [Symbol.iterator]() {
    let index = 0;
    return {
      next: () => {
        if (index < this.data.length) {
          return { value: this.data[index++], done: false };
        } else {
          return { done: true };
        }
      },
    };
  },
};

// Use the iterator to iterate over the object
for (let value of obj) {
  console.log(value);
}
