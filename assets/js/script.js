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

const price = distance * 0.21
console.log(price);

const age = prompt("age of user")
console.log(age);


if (age < 18) {
    const underage = price - ((price * 20) / 100)
    console.log(underage);

}
else if (age > 65) {
    const veteran = price - ((price * 40) / 100)
    console.log(veteran);

}
else {
    const normal = price
    console.log(normal);

}


