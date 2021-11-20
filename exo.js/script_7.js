var ask = prompt("Pose ta question: ");


if (ask.indexOf("?")) {
  console.log("Ouais Ouais...");
} else if (ask.toUpperCase()) {
  console.log("Pwa, calme-toi...");
} else if (ask.indexOf("Fortnite")) {
  console.log("on s' fait une partie soum-soum ?");
} else if (ask === " ") {
  console.log("t'es en PLS ?");
} else {
  console.log("balek.");
}



/* Si on lui pose une question (= la phrase finie par "?"), le bot répond "Ouais Ouais..." ;
Si on lui hurle trop dessus (= la phrase est 100% en majuscules), le bot répond "Pwa, calme-toi..." ;
Si la phrase que tu prononces contient le mot "Fortnite", le bot répond "on s' fait une partie soum-soum ?" ;
Si on lui envoie un message vide, le bot répond "t'es en PLS ?" ;
Pour tout autre phrase que tu lui envoies, le bot répond "balek." ; */
