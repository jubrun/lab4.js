/* Uppgift 9, JavaScript. Av Julia Brunius, okt. 2026  */
"use strict";

// En array med fem olika objekt som representerar fem olika personer
const people = [ 
 {
    name: "Håkan",
    age: 52,
    city: "Göteborg"
},
 {
    name: "Bosse",
    age: 4,
    city: "Umeå"
},
 {
    name: "Veronica",
    age: 45,
    city: "Uppsala"
},
 {
    name: "Linnea",
    age: 39,
    city: "Halmstad"
},
 {
    name: "Alva",
    age: 7,
    city: "Växjö"
}
];

// En funktion som skriver ut information om varje person: namn, stad och om den är myndig eller ej
function logPerson(person){
    if (person.age >= 18 ) {
        console.log(person.name + " bor i " + person.city + " och är myndig");
    } else {
        console.log(person.name + " bor i " + person.city + " och är inte myndig");
}
}

/*
// Testade även att göra samma funktion som ovan fast istället med template literals
function logPerson(person){
    if (person.age >= 18 ) {
        console.log(`${person.name} bor i ${person.city} och är myndig`);
    } else {
        console.log(`${person.name} bor i ${person.city} och är inte myndig`);
}
}
*/

// Går igenom arrayen med en forEach-loop och anropar funktionen logPerson
people.forEach(logPerson);
