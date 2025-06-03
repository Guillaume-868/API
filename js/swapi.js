

const rootURL = "https://www.swapi.tech/api/"; 

async function getResources() {
    const url = new URL(rootURL);
    try {
        const response = await fetch(url);
        const data = await response.json();
        return data;
    }
    catch (error) {
        console.log(error);
    }
}

async function getPerson(id) {
    const url = new URL(rootURL + "people/" + id + "/");
    try {
        const response = await fetch(url);
        const data = await response.json();
        return data;
    }
    catch (error) {
        console.log(error);
    } 
}

async function getPeople(queryObject) {
    const url = new URL(rootURL + "people");
    if (queryObject) {
        for (let key of Object.keys(queryObject)) {
            let value = queryObject[key];
            url.searchParams.append(key, value);
        }
    }
    try {
        const response = await fetch(url);
        const data = await response.json();
        return data;
    }
    catch (error) {
        console.log(error);
    }
}

// Première Etape :  Création de variable contenant l'URL de SWAPI

// Seconde Etape : Fonction asynchrone qui fait une requète auprès du site SWAPI
// pour récupérer les RESSOURCES (voir fichier app.js)
// Si l'accès est autorisé et que le lien est toujours existant:
// Envoi du fichier JSON contenant les données demandées
// Sinon : Message d'erreur.
// Erreur 404 : l'URL n'est plus existante ou saisie incorrecte.
// Erreur 403 : Interdiction d'accès.

//Troisième Etape : Fonction asynchrone qui fait une requète auprès du site SWAPI
// pour récupérer les informations détaillées d'un PERSONNAGE (/1) (/2)...
// Si notre requête est entendue et approuvée : Envoi du fichier JSON
// Sinon : Message d'erreur.

// Dernière Etape : Fonction comprenant la méthode getPeople avec en paramètre un Objet de type Tableau recenssant tous les personnages demandés.
// Ensuite on fait ressortir tous les personnages présents dans ce tableau. 
// Suivi d'un fetch pour la requète de ces données qui nous seront retournées ou non.
// La méthode key : Retourne les propriétés de l'Objet  querryObjet.
// Là, dans cet exemple, key contient tous les noms des personnages sous forme de chaîne de caractère ("R2D","C3PO"...)