const createObjectFromArray = ([key, value]) => ({
  [key]: value,
});

const createUser = (firstName, lastName) => ({
  firstName,
  lastName,
  fullName() {
    return `${firstName} ${lastName}`;
  },
});

const user1 = createUser("John", "Doe");
const user2 = createUser("Donald", "Doe");

const objectFromArray = createObjectFromArray(["name", "John"]);

console.log(user1.fullName()); // "John Doe"
console.log(user2.fullName()); // "Donald Doe"
console.log(objectFromArray); // {name: "John"}
