const entrepreneurs = [
  { first: 'Steve', last: 'Jobs', year: 1955 },
  { first: 'Oprah', last: 'Winfrey', year: 1954 },
  { first: 'Bill', last: 'Gates', year: 1955 },
  { first: 'Sheryl', last: 'Sandberg', year: 1969 },
  { first: 'Mark', last: 'Zuckerberg', year: 1984 },
  { first: 'Beyonce', last: 'Knowles', year: 1981 },
  { first: 'Jeff', last: 'Bezos', year: 1964 },
  { first: 'Diane', last: 'Hendricks', year: 1947 },
  { first: 'Elon', last: 'Musk', year: 1971 },
  { first: 'Marissa', last: 'Mayer', year: 1975 },
  { first: 'Walt', last: 'Disney', year: 1901 },
  { first: 'Larry', last: 'Page', year: 1973 },
  { first: 'Jack', last: 'Dorsey', year: 1976 },
  { first: 'Evan', last: 'Spiegel', year: 1990 },
  { first: 'Brian', last: 'Chesky', year: 1981 },
  { first: 'Travis', last: 'Kalanick', year: 1976 },
  { first: 'Marc', last: 'Andreessen', year: 1971 },
  { first: 'Peter', last: 'Thiel', year: 1967 }
];

//entrepreuneurs né ds les années 1970
const index = entrepreneurs.filter((years) => years.year >= 1970 && years.year <= 1980)
console.table(index);


//Sors un array qui contient prénom - nom 
x = []; 
for (let a = 0; a < entrepreneurs.length; a++) {
  //tant que la variable a est inférieur à la longueur de const entrepreneurs
  x[a] = {
    first: entrepreneurs[a].first,
    last: entrepreneurs[a].last //Va chercher dans l'array [a] le first & last de chaque entrepreneurs
  };
}
console.log("Voici les prénoms et noms des entrepreneurs: ")
console.table(x);


//quel age aurait chaque inventeur aujourdhui
y = [];
for (let i = 0; i < entrepreneurs.length; i++) {
  y[i] = {
    first: entrepreneurs[i].first,
    last: entrepreneurs[i].last,
    age: 2021 - entrepreneurs[i].year
  };
}
console.log("Voici l'age des entrepreuneurs en 2021: ");
console.table(y);

//Trier par nom de famille 
entrepreneurs.sort((a,b) => (a.last > b.last) ? 1 : ((b.last> a.last) ? -1 : 0)); 
console.table(entrepreneurs);


