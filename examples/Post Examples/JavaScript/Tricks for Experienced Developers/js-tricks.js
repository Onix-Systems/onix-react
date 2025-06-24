// 1️⃣ Proxy Objects
// Proxy lets you define custom behavior for object operations.
const handler = {
  get(target, prop) {
    return prop in target ? target[prop] : `⚠️ "${prop}" does not exist`;
  }
};

const user = new Proxy({ name: 'Onix' }, handler);

console.log(user.name); // "Onix"
console.log(user.age);  // ⚠️ "age" does not exist"

// 2️⃣ Currying
// Transforms a multi-arg function into a series of single-arg functions.
function curry(fn) {
  return function curried(...args) {
    return args.length >= fn.length
      ? fn.apply(this, args)
      : (...next) => curried.apply(this, [...args, ...next]);
  };
}

function add(a, b, c) {
  return a + b + c;
}

const curriedAdd = curry(add);
console.log(curriedAdd(1)(2)(3)); // 6

// 3️⃣ Higher-Order Functions
// A function that takes or returns another function.
function withLogging(fn) {
  return function (...args) {
    console.log('Calling function with args:', args);
    const result = fn(...args);
    console.log('Function returned:', result);
    return result;
  };
}

const multiply = (a, b) => a * b;
const loggedMultiply = withLogging(multiply);

loggedMultiply(2, 5); // Logs inputs and result

// 4️⃣ Debouncing and Throttling
// Control the rate of function execution — useful for performance.
function debounce(fn, delay) {
  let timeoutId;
  return (...args) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => fn(...args), delay);
  };
}

function throttle(fn, limit) {
  let lastCall = 0;
  return (...args) => {
    const now = Date.now();
    if (now - lastCall >= limit) {
      lastCall = now;
      fn(...args);
    }
  };
}

// 5️⃣ Event Delegation
// Efficient event handling via parent delegation.
document.querySelector('#parent').addEventListener('click', function (event) {
  if (event.target.tagName === 'BUTTON') {
    console.log('Button clicked:', event.target.textContent);
  }
});
