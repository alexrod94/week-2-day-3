// TODO: write the methods getAge, addJoke and getRandomJoke

const chuck = {
  firstName: "Chuck",
  lastName: "Norris",
  birthDate: new Date("1940-03-10"),
  jokes: [
    "Chuck Norris counted to infinity... Twice.",
    "Chuck Norris is the only man to ever defeat a brick wall in a game of tennis",
  ],
  displayInfo() {
    console.log(
      `My name is ${this.firstName} ${this.lastName} and I have ${this.jokes.length} jokes.`
    );
  },
  getAge() {
    const timeNow = new Date();
    console.log(timeNow - this.birthDate);
  },
  addJoke(joke) {
    this.jokes.push(joke);
  },
  getRandomJoke() {
    const numero = Math.floor(this.jokes.length * Math.random());
    console.log(this.jokes[numero]);
  },
};

chuck.addJoke("Chuck Norris kills flies with his gun.");
chuck.addJoke("Chuck Norris kills flies with his gun.");
chuck.addJoke("Chuck Norris kills flies with his gun.");
// chuck.displayInfo();
chuck.getRandomJoke();

/*
chuck.addJoke("Chuck Norris can divide by zero.");
console.log("getRandomJoke", chuck.getRandomJoke());

chuck.addJoke("Chuck Norris kills flies with his gun.");
console.log("getRandomJoke", chuck.getRandomJoke());
chuck.addJoke("Chuck Norris was once in a knife fight, and the knife lost.");
console.log("getRandomJoke", chuck.getRandomJoke());

chuck.displayInfo();
*/
