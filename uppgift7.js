/* Uppgift 7, JavaScript. Av Julia Brunius, okt. 2026  */
"use strict";


//En array med åtta stycken tal
let numbers = [8, 42, 76, 39, 11, 93, 60, 24];

// En funktion som döpts till 'totalSum' med parametern 'arr'
function totalSum(arr) {

    // Skapar en variabel för summan med startvärdet 0
    let sum = 0;
    
    // Här börjar for-loopen som går igenom arrayens innehåll
    for (let i = 0; i < arr.length; i++){

        // Delen av loopen som adderar alla talen till en summa
        sum += arr[i];
    }
    // Funktionen returnerar summan
    return sum;
}

// Anropar funktionen med arrayen som argument
let total = totalSum(numbers);
