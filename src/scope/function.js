function greeting() {
  let userName = "Ana";
  console.log(userName);

  if (userName === "Ana") {
    console.log(`Hello ${userName}!`);
  }
}

greeting();

/* La variable userName solo tiene 
un alcance a nivel de la función */
console.log(userName);
