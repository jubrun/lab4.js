/* Uppgift 6, JavaScript. Av Julia Brunius, okt. 2026  */
"use strict";

//Skapad funktion som heter calculateArea med bredden och höjden som parametrar
function calculateArea(width, height) {

     //Uträkningen hur man beräknar arean
    let area = width * height;   

    // Returnerar resultatet
    return area;   
}

//Resultaten av tre anrop med olika värden
console.log("Arean är " + calculateArea (5,4));
console.log("Arean är " + calculateArea (6,9));
console.log("Arean är " + calculateArea (12,20));
