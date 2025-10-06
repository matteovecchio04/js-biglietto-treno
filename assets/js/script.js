/*

Il programma chiederà all'utente il numero di kilometri che vorrà percorrere e l'età dell'utente

Calcolare il prezzo totale del viaggio, secondo queste regole:
- Il prezzo del biglietto è definito in base ai km (0.21 € al km)
- Va applicato uno sconto del 20% per i minorenni
- Va applicato uno sconto del 40% per gli over 65.
- L'output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo).

*/

/* TOOLS:

-variables: let/const for the ages (<18 and >65)
-alert: to have a visual representation of the code
-console.log: to test the code in the console

-If age <18 true --> apply 20% discount
-Else If age >65 true --> apply 40% disocunt
-Else apply 0% discount

-number of km?
-const: 0.21 euro/km

*/

const distance = prompt("kilometers traveled")
console.log(distance);
// add prompt to add how many km the user will travel
const price = distance * 0.21
console.log(price);
// calculates the price based on the total distance
const age = prompt("age of user")
console.log(age);
// add prompt to add how old the user is

if (age < 18) {
    const underage = price - ((price * 20) / 100)
    const underageDecimal = underage.toFixed(2)
    console.log(underageDecimal);
}
// if user is under 18 this will apply a 20% discount to the price
else if (age > 65) {
    const veteran = price - ((price * 40) / 100)
    const veteranDecimal = veteran.toFixed(2)
    console.log(veteranDecimal);
}
// if user is over 65 this will apply a 40% discount to the price
else {
    const normal = price
    const normalDecimal = normal.toFixed(2)
    console.log(normalDecimal);
}
// if user is over 18 and below 65, he will pay the regual price with no discount


