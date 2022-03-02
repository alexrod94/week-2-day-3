function login(user) {
  return new Promise((resolve, reject) => {
    if (user === "paco") {
      resolve("El usuario está registrado"); // fulfilled successfully
    } else {
      // throw new Error("Rejected by throwing an Error!");
      reject("No te has registrado"); // error, rejected
    }
  });
}

login("pacoaasdf")
  .then((value) => console.log("Mensaje: ", value))
  .catch((err) => console.log(err));
