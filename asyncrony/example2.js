const pr5 = new Promise((resolve, reject) => {
  setTimeout(() => {
    if (1 === 1) {
      resolve("A");
    } else {
      reject("Rejected");
    }
  }, 2000);
});

pr5
  .then((value1) => {
    console.log("value1:", value1);
    return "B";
  })
  .then((value2) => {
    console.log("value2:", value2);
    return "C";
  })
  .then((value3) => {
    console.log("value3:", value3);
    return "D";
  })
  .then((value4) => {
    console.log("value4:", value4);
  })
  .catch((err) => console.log(err))
  .finally(() => {
    console.log("finally()");
  });
