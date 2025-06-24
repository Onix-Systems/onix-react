// Array.prototype.map()
const numbers1 = [1, 2, 3, 4];
const doubled = numbers1.map(num => num * 2);
console.log('map:', doubled); // [2, 4, 6, 8]

// Array.prototype.filter()
const numbers2 = [1, 2, 3, 4];
const even = numbers2.filter(num => num % 2 === 0);
console.log('filter:', even); // [2, 4]

// Array.prototype.sort()
const numbers3 = [4, 2, 3, 1];
numbers3.sort((a, b) => a - b);
console.log('sort:', numbers3); // [1, 2, 3, 4]

// Array.prototype.some()
const numbers4 = [1, 2, 3, 4];
const hasEven = numbers4.some(num => num % 2 === 0);
console.log('some:', hasEven); // true

// Array.prototype.every()
const numbers5 = [1, 2, 3, 4];
const allEven = numbers5.every(num => num % 2 === 0);
console.log('every:', allEven); // false
