// Create a proxy object
const handler = {
  get(target, property) {
    console.log(`Getting property "${property}"`);
    return target[property];
  },
  set(target, property, value) {
    console.log(`Setting property "${property}" to "${value}"`);
    target[property] = value;
    return true;
  },
};

const obj = new Proxy({}, handler);

// Use the proxy object
obj.name = 'Onix';
console.log(obj.name);
