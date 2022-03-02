const reptiles = ["snake", "lizard", "alligator"];
const mammals = ["puppy", "kitten", "bunny"];

const newArr = [...reptiles, ...mammals];

// console.log(newArr);

const names = ["ana", "milo", "ivan"];
const newNames = [...names];

newNames.reverse();

// console.log(names);

function myFunction(...args) {
  args.forEach((arg) => console.log(arg));
}

myFunction(
  "first argument",
  "second argument",
  "third argument",
  "fourth argument",
  "hola"
);
