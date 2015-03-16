/**
 * Created by Louis on 2015-03-05.
 */

//alert ("Bienvenue sur ma page personnelle!");


//var age = prompt ("Quel âge avez-vous?");


//console.log ("Vous avez", age, "ans");


//var nombre = prompt("Entrez un nombre entre 1 et 100");
//nombre = Number(nombre);

//if ( (nombre >= 1) && (nombre <= 100)) {
//    alert("Merci!");
//}
//else {
 //   alert("Mauvaise entrée!");
//}



//var i = 1;
//var bonNombre = 79;

//while ( i <= 5) {

//var devine = parseInt(prompt("Devinez le nombre entre 1 et 100 que j'ai dans ma tête") );

//if ( (devine < 1)|| (devine > 100) ){
//    alert("Mauvaise entrée!")
//    break;
//}

//else if (devine < bonNombre) {
//    alert("Votre nombre est trop petit")
//    }

//else if (devine > bonNombre) {
//    alert("Votre nombre est trop grand")
//}

//else {
//    alert("Bravo! Vous avez devinez correctement!")
 //   break;
//}

//i = (i + 1);
//}


var liste = [];


while(true) {


    liste.push(prompt("Ajoutez un item dans la liste d'épicerie"));

    if (liste == ["fini"]) {
        alert("Voici tous les items dans la liste:");
        for (var numeroliste = 0; numeroliste < liste.length; numeroliste++);
        alert("item #" + (numeroliste + 1) + ": " + liste[numeroliste]);
        break;
    }

    else {
        alert("La liste contient " + liste.length + " items.");
    }

}