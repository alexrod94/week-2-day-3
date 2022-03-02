/* Given the previous object data, use the object destructuring to be able to print student first and last name, favorite football club, as well as the city and the country this student is coming from. */

const data = {
  name: {
    firstName: "ana",
    lastName: "marino",
  },
  isStudent: true,
  favoriteFootballTeam: "fc barcelona",
  hometown: {
    city: "buenos aires",
    country: "argentina",
  },
};

// Nombre, apellido, fútbol, ciudad, país

const {
  name: { firstName, lastName },
  hometown: { city, country },
  favoriteFootballTeam,
} = data;

console.log(firstName);
console.log(lastName);
console.log(city);
console.log(country);
console.log(favoriteFootballTeam);
