class Pokemon {
  constructor(nombre, vida, ataque) {
    this.nombre = nombre;
    this.vida = vida;
    this.ataque = ataque;
    this.nivel = 1;
  }

  // getter
  getLife() {
    return this.vida;
  }

  // setter
  setLife(daño) {
    this.vida -= daño;
  }
}

const manolo = new Pokemon("manolo", 500, "Ataque Manolo");
const sara = new Pokemon("sara", 600, "Flamenco");

console.log(manolo.recibirDaño());
// console.log(sara);
