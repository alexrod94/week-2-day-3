function showMessage() {
  console.log("Mensaje con retraso");
}

setTimeout(showMessage, 2000);

setInterval(showMessage, 2000);
