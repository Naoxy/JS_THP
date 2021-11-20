const books = [
  { title: 'Gatsby le magnifique', id: 133712, rented: 39 },
  { title: 'A la recherche du temps,perdu', id: 237634, rented: 28 },
  { title: 'Orgueil & Préjugés', id: 873495, rented: 67 },
  { title: 'Les frères Karamazov', id: 450911, rented: 55 },
  { title: 'Dans les forêts de Sibérie', id: 8376365, rented: 15 },
  { title: 'Pourquoi j\'ai mangé mon père', id: 450911, rented: 45 },
  { title: 'Et on tuera tous les affreux', id: 67565, rented: 36 },
  { title: 'Le meilleur des mondes', id: 88847, rented: 58 },
  { title: 'La disparition', id: 364445, rented: 33 },
  { title: 'La lune seule le sait', id: 63541, rented: 43 },
  { title: 'Voyage au centre de la Terre', id: 4656388, rented: 38 },
  { title: 'Guerre et Paix', id: 748147, rented: 19 }
];

//tt les livres empreinté une fois 
for(let book in books){
  if (books[book].rented > 0){
  resultat = true
  }else if(books[book].rented === 0)
  {
    resultat = false
    break
  }
};


//livre le plus empreinté 
function max_rented_book(books) {
  //func max_rented dans l'array books
  let a = 0;
  let max = 0;
  let name = "";

  while (a < books.length) {
    //tant que a est strictement plus petit que la longueur de books
    if (books[a].rented > max) {
      //on va chercher dans books le livre le plus emprunté 
      max = books[a].rented; //max ns renvoie le nombre de fois emprunté
      name = books[a].title; //name le nom du livre associé 
    }
    a++; //Fais défilé ds books jusqu'à arriver à la fin const
  }
  console.log(max, "fois", "le titre du livre le plus est:", name); //Ce que la console nous renvois 
}

function min_rented_book(books) { 
  //On crée une fonction min_rented_book ds l'array books
  let a = 0;
  let min = books[0].rented;
  let name = books[0].title;
  
  while (a < books.length) {
    //Tant que a est strictement plus petit que la longueur de books
    if (books[a].rented < min) {
      //On va chercher ds books le livre le moins  emprunté 
      min = books[a].rented; //min nous renvois le nombre de fois emprunté 
      name = books[a].title; // name le nom du livre associé 
    }
    a++; 
  }
  console.log(min, "fois", "le titre du livre le moins emprunté est:", name);
}
max_rented_book(books); 
min_rented_book(books);


//trouve le livre l'id:873495
function find_id(book) {
  //On créer une fonction find_id pour regarder dans books 
  return book.id == 873495;
} //trouve l'id dont j'ai besoin 
let b = books.find(find_id);
console.log(`Le livre avec cet id, 873495 est: ${b.title}`); //il me donne ds la console le livre avec l'id qui correspond



//supprime le livre id:133712
let removed; //On créer une variable removed

for (let i = 0; i < books.length; i++) {
  //Il va regarder ds books 
  if (books[i].id === 133712) {
    //Cherche ds books l'id qui correspond à celui rechercher
    removed = books.splice(0, 1); // On lui demande de le supprimer de la database 
  }
}
console.log(`Le livre avec l'id: ${removed[0].id}, appelé: ${removed[0].title}`);
//La console renvoie 
console.log(removed);


//trier livre par ordre alphabetique sans l'id supp
books.sort((a,b) => (a.title > b.title) ? 1 : ((b.title > a.title) ? -1 : 0)); 
console.table(books);