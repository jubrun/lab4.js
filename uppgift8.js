/* Uppgift 8, JavaScript. Av Julia Brunius, okt. 2026  */
"use strict";

// Mitt objekt med egenskaper om min favoritbok 
const myBook = {
    originaltitle: "Where Rainbows End",
    author: "Cecilia Ahern",
    year: 2004,
    country: "Ireland",
    swedishtitle: "Där regnbågen slutar",
    swedishtranslator: "Johanna Svartström"
}

// Funktionen som tar emot mitt bokobjekt & strukturerar upp dess egenskaper
function printBookInfo(book) {
    console.log("Originaltitel: " + book.originaltitle);
    console.log("Författare: " + book.author);
    console.log("Utgivningsår: " + book.year);  
    console.log("Utgivningsland: " + book.country);
    console.log("Svensk titel: " + book.swedishtitle);
    console.log("Svensk översättare: " + book.swedishtranslator);
}

// Anpropar funktionen och skriver ut information om boken
printBookInfo(myBook);
