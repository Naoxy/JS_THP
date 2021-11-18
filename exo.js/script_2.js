const number = parseInt(prompt('Entrer un nombre positif: '));

if (number < 0) {
  console.log("Erreur! Les factorielles en nombre negatif n\'existe pas.")
}
else if (number === 0) {
  console.log(`la factorielle de ${number} est de 1.`);
}
else {
  let fact = 1;
  for (i = 1; i <= number; i++) {
    fact *= i;
  }
  console.log(`Le resultat de ${number} est: ${fact}`);
}

