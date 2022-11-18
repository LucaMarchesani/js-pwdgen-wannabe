//Hello World! test
document.writeln ("Hello World!");
console.log ("Hello World!")

//Variables
const userName = prompt ("Inserisci il tuo nome");
const userSurname = prompt ("Inserisci il tuo cognome");
let userFavoriteColor = prompt ("Inserici il tuo colore preferito");
let userAge = prompt ("Inserisci la tua età");

//writing in console
console.log (userName, userSurname, userFavoriteColor, userAge);

//Overwrites the "output" element in the HTML file
document.getElementById("output").innerHTML = "Informazioni dell'utente: " + userName + userSurname + userFavoriteColor + userAge;

