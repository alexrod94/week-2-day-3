const campuses = ["madrid", "barcelona", "miami"];

const [campus1, campus2, thirdCampus, campus4 = "París"] = campuses;

// console.log(campus4);

const europeanCampuses = [
  ["madrid", "es"],
  ["barcelona", "es"],
  ["berlin", "de"],
  ["paris", "fr"],
  ["amsterdam", "nl"],
  ["lisbon", "pt"],
];

const [[, idioma], nombre] = europeanCampuses;

// console.log(idioma);
// console.log(nombre);

// const [a, b] = [1];
// console.log(a * b); // <== ???
// const [a, b = 1] = [2];
// console.log(a * b); // <== ???
let [a, b = 2, c, d = 1] = [3, , 4];
console.log(a, b, c, d); // ==> ???
