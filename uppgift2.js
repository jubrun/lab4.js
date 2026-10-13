/* Uppgift 2, JavaScript. Av Julia Brunius, okt. 2026  */
"use strict";

// Priset
let price = 500; 
console.log("Pris: " + price + " kr");

// Antalet
let amount = 4;
console.log("Antal: " + amount);

// Den totala summan
let total = price * amount;
console.log("Totalt: " + total + " kr");

// Det totala ink. 25% moms
let totalwithvat = total * 1.25;
console.log("Totalt inklusive moms: " + totalwithvat + " kr");