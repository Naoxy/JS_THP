const number = parseInt(prompt("Salut, bienvenue dans ma super pyramide ! Combien d'étages veux-tu ?"));

console.log("Voici la pyramide :")
for (let count = 1; count <= number; count++) {
    output(count);
}

function output(count) {
  console.log(`${"#" * count}`);
}
