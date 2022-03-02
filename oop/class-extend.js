class NormalPerson {
  constructor(age, name) {
    this.age = age;
    this.name = name;
  }

  sayHello() {
    console.log(`Hi, my name is ${this.name}`);
  }
}

const lucia = new NormalPerson(23, "Lucía");

class Superhero extends NormalPerson {
  constructor(age, name, powers) {
    super(age, name);
    this.powers = powers;
  }
}

const shazam = new Superhero(2000, "Shazam", "Flight");

console.log(shazam.sayHello());
