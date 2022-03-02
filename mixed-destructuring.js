const customer = {
  name: {
    firstName: "ivan",
    lastName: "zoro",
  },
  age: 32,
  preferences: [
    {
      tech: ["cameras", "smartwatches"],
      books: ["science fiction", "coding"],
    },
  ],
};

// const hobby = customer.preferences[0].tech[1];

const {
  name: { firstName, lastName },
  age,
  preferences: [
    {
      tech: [, hobby],
      books,
    },
  ],
} = customer;

// console.log(hobby);

function getFullName(name) {
  const firstName = name.firstName;
  const lastName = name.lastName;
  return `${firstName} ${lastName}`;
}

function getFullName({ firstName, lastName }) {
  return `${firstName} ${lastName}`;
}

const myObj = {
  firstName: "Juan",
  lastName: "Pérez",
};

console.log(getFullName(myObj));
