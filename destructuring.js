const person = {
  name: "Ironhacker",
  age: 25,
  favoriteMusic: "Metal",
  address: {
    street: "Super Cool St",
    number: 123,
    city: "Miami",
  },
};

let {
  name: fullName,
  age,
  favoriteMusic,
  address: { number },
} = person;

console.log(number);
// console.log(age);
// console.log(location);
