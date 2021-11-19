const ask = parseInt(prompt('Pose ta question: '));

askNew = 1; //teste avec plusieurs valeurs
switch (askNew) {
  case '?':
    console.log("Ouais Ouais...");
    break;
  case 2:
    console.log("Pwa, calme-toi...");
    break;
  case 'Fortnite':
    console.log("on s\' fait une partie soum-soum ?");
    break;
  case ' ':
    console.log("t'es en PLS ?");
    break;
  default:
    console.log("balek.");
    break;
}












/* Si on lui pose une question (= la phrase finie par "?"), le bot répond "Ouais Ouais..." ;
Si on lui hurle trop dessus (= la phrase est 100% en majuscules), le bot répond "Pwa, calme-toi..." ;
Si la phrase que tu prononces contient le mot "Fortnite", le bot répond "on s' fait une partie soum-soum ?" ;
Si on lui envoie un message vide, le bot répond "t'es en PLS ?" ;
Pour tout autre phrase que tu lui envoies, le bot répond "balek." ; */
