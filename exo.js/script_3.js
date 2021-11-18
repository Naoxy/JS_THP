const number = parseInt(prompt("Salut, bienvenue dans ma super pyramide ! Combien d'étages veux-tu ?"));

console.log("Voici la pyramide :")
for (let count = 1; count <= number; count++) {
  for (var j = 1; j <= count; j++)
    output += j + ' ';
}
console.log(output);
output = '';


