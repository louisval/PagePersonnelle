/**
 * Created by Louis on 2015-03-05.
 */

alert ("Bienvenue sur ma page personnelle!");



var age = prompt ("Quel âge avez-vous?");



console.log ("Vous avez", age, "ans");



var nombre = prompt("Entrez un nombre entre 1 et 100");
nombre = Number(nombre);

if ( (nombre >= 1) && (nombre <= 100)) {
    alert("Merci!");
}
else {
    alert("Mauvaise entrée!");
}



var i = 1;
var bonNombre = 79;


while ( i <= 5) {

var devine = prompt("Devinez le nombre entre 1 et 100 que j'ai dans ma tête");
    devine = Number(devine);

if ((devine < 1) || (devine > 100)) {
    alert("Mauvaise entrée!");
    break;
}

if (bonNombre == devine) {
    alert("Bravo! Vous avez devinez correctement!");
    break;
}

if ((devine >= 1) && (devine < bonNombre)) {
    alert("Votre nombre est trop petit");
}

if ((devine > bonNombre) && (devine <= 100)) {
    alert("Votre nombre est trop grand");
}

i = (i + 1);

}

