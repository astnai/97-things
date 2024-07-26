// Immutable data structure
const createPerson = (name, age) => ({
  name,
  age,
});

// Pure function
const getGreeting = (person) => `Hello, ${person.name}!`;

// Higher-order function
const repeatGreeting = (greetingFn, times) => (person) => {
  return Array(times)
    .fill(null)
    .map(() => greetingFn(person))
    .join(" ");
};

// Function composition
const compose = (f, g) => (x) => f(g(x));

// Currying
const add = (a) => (b) => a + b;

// Example usage
const person = createPerson("Alice", 30);
console.log("Original person:", person);

// Demonstrate immutability
const olderPerson = { ...person, age: person.age + 1 };
console.log("Older person:", olderPerson);
console.log("Original person (unchanged):", person);

// Use pure function
console.log("Greeting:", getGreeting(person));

// Use higher-order function
const repeatThreeTimes = repeatGreeting(getGreeting, 3);
console.log("Repeated greeting:", repeatThreeTimes(person));

// Demonstrate function composition
const toUpperCase = (str) => str.toUpperCase();
const exclaim = (str) => `${str}!`;
const shout = compose(exclaim, toUpperCase);
console.log("Shouted greeting:", shout(getGreeting(person)));

// Use currying
const add5 = add(5);
console.log("5 + 3 =", add5(3));

// Demonstrate referential transparency
const greet = (name) => `Hello, ${name}!`;
console.log("Greeting Alice:", greet("Alice"));
console.log("Greeting Alice again:", greet("Alice"));
// The above two calls will always produce the same result, demonstrating referential transparency
