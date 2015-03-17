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


//var listeEpicerie = [];


//while(true) {


 //   listeEpicerie.push(prompt("Ajoutez un item dans la listeEpicerie d'épicerie"));

   // if (listeEpicerie[listeEpicerie.length - 1] == ["fini"]) {
     //   alert("Voici tous les items dans la listeEpicerie:");
       // for (var numeroliste = 0; numeroliste < listeEpicerie.length; numeroliste++) {
         //   alert("item #" + (numeroliste + 1) + ": " + listeEpicerie[numeroliste]);
       // }
       // break;
   // }

   // else {
     //   alert("La listeEpicerie contient " + listeEpicerie.length + " items.");
   // }

//}

function nombreAleatoire(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

var i = 1;
var numeroListe = [];
var bonneListe = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "30", "31", "32", "33", "34", "35", "36", "37", "38", "39", "40", "41", "42", "43", "44", "45", "46", "47", "48", "49"];


while (i <= 6) {
    var numerochoisi = prompt("Choississez un numéro entre 1 et 49.");

    if ((numerochoisi < 1) || (numerochoisi > 49)) {
        alert("SVP recommencez");
        i = (i - 1);
    }

    else {
        numeroListe.push(numerochoisi);
        bonneListe.indexOf(numerochoisi);
    }

i = (i + 1);
}

console.log(numeroListe);

//arr.indexOf(élémentRecherché[, indiceDébut = 0])
//var indices = [];
//var tableau = ['a', 'b', 'a', 'c', 'a', 'd'];
//var élément = 'a';
//var idx = tableau.indexOf(élément);
//while (idx != -1) {
  //  indices.push(idx);
   // idx = tableau.indexOf(élément, idx + 1);
//}
//console.log(indices);
// [0, 2, 4]
//var listeEpicerie = [];
//while(true) {
  //  var nouvelItem = prompt("Ajoutez un item, entrez 'FINI' pour terminer.");
    //if (nouvelItem.length == 0) {
      //  alert("vous n'avez rien entré");
    //}
    //else if (nouvelItem == 'FINI') {
        // afficher tous les items de la liste
      //  alert("Voici tous les items dans la liste:");
        //for (var numeroliste = 0; numeroliste < listeEpicerie.length; numeroliste++) {
          //  alert("item #" + (numeroliste + 1) + ": " + listeEpicerie[numeroliste]);
        //}
        //break;
    //}
    //else {
      //  listeEpicerie.push(nouvelItem);
       // alert('La liste contient ' + listeEpicerie.length + ' items.');
   // }
//}