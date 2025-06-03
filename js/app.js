import {log} from "./log.js";

//Première Etape : Importation du Fichier dont on a besoin 
// pour afficher les requêtes.

// Seconde Etape : Faire l'afffichage représentant le chargement de la page

//Troisième Etape : Afficher le résultat de chaque requête (données)
// dans l'ordre suivant : 
// RESSOURCES: planetes, films, especes, vaisseaux, personnages... (général)
// PERSONNAGES : Luke Skywalker, Darth Vader (2 pages)
// Affiches les informations du Premier personnages (/1)
// Soit : Age, Taille, Couleur des Yeux...

log("Load"); 
// Chargement (Peut prendre un certain temps) 
// Du Style : - Bonjour
//            - Bonjour, Quelle est la raison de votre présence?
//            - Je viens récupérer les données Top Secrètes
//            - Je vais demander à mon supérieur


getResources().then( data => { // Recupérer les données
    log("Result of getResources", data); // Afficher les données RESSOURCES
});

getPeople().then(data => { // Recupérer les données
    log("Result of getPeople", data); // Afficher les données PERSONNAGES (page 1)
});

getPeople({page: 2}).then( data => { // Recupérer les données
    log("Result of getPeople (page 2)", data); // Afficher les données PERSONNAGES (page 2)
});

getPerson(1).then( data => { // Recupérer les données
    log("Result of getPerson/1", data); // Affiches les informations du Premier personnages (/1) [Luke Skywalker]
});