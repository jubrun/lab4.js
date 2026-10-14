/* Uppgift 5, JavaScript. Av Julia Brunius, okt. 2026  */
"use strict";

let dishes = ["Spaghetti Carbonara", "Våfflor med Vaniljglass", "Halloumiburgare", "Fisk-tacos", "Hemmagjord Pizza", "Ceasarsallad" ]

// 1. Skriver ut hela arrayen med alla maträtter
console.log(dishes);

// 2. Första elementet (maträtten) i arrayen     
console.log(dishes[0]);

// 3. Sista elementet (maträtten) i arrayen
console.log(dishes[dishes.length-1]);

// 4. Lägger till en ny maträtt ("Sushi") sist i arrayen
dishes.push("Sushi");

// 5. Tar bort den första maträtten i arrayen
dishes.shift();

// 6. Skriver ut hela arrayen igen, efter gjorda förändringar
console.log(dishes);
