/* Uppgift 3, JavaScript. Av Julia Brunius, okt. 2026  */
"use strict";

//Bestämd Ålder 
let age = 29;

//Om åldern är under 18 - körs "BARN"
if (age < 18) {
    console.log("BARN");
}  

//Om åldern är 65 alt. över 65 - körs "PENSIONÄR"
else if (age >= 65 ) {
    console.log("PENSIONÄR");
} 

//Om åldern varken är under 18 eller över 65, - körs "VUXEN"
else {
    console.log("VUXEN");
}

// I det här fallet kommer min valda ålder av 29 resultera i "VUXEN"