/* const number = parseInt(prompt("Salut, bienvenue dans ma super pyramide ! Combien d'étages veux-tu ?"));
let output = "";
console.log("Voici la pyramide :")
for (let count = 1; count <= number; count++) {
  for (var j = 1; j < count; j++)
    output += j + ' ';
}
console.log(output);
output = ''; */

let userNumber = prompt("Choisis un nombre d'étage(s) à ta pyramide ?"); // Le prompt permet d'afficher un input qui pose une question
let stair = "*"; // Variable qui définit les étages
let empty = " "; //
for (var i = 1; i <= userNumber; i++) {
  // Nous faisons commencer la pyramide à 1 étage et nous rajoutons 1 à chaque étage en fonction du nombre choisis
  stairs = stair.repeat(i); //Nous affichons plusieurs * suivant le nombre choisis
  console.log(stairs); //Nous renvois une pyramide dans la console
}
