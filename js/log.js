


const elConsole = document.querySelector("#console"); 
// Récupérer l'ID ("#console")
//Première Etape : Récupération de la console avec le querry selector
// Seconde Etape : Exportation de l'ensemble de la fonction avec comme méthode log().

export function log() {  // Export fonction 
    console.log("arguments : ", ...arguments); // affichage donnée data JSON (personnages, espèces...)
    const pre = document.createElement("pre"); // creer balise pre : Conserve la syntaxe d'origine.
    for (let arg of arguments) { // Boucle parcourant les différents arguments
        switch (typeof arg) { // Précise si arge est une chaine de caractère, un tableau ou autre
            case "string": // chaine de caractère
                pre.append(arg); // Ajouter l'argument à la balise pre
                break; // Interrompre le traitement
            default: // Comportement par defaut
                pre.append(JSON.stringify(arg, null, 2));// Balise pre avec méthode ppend qui prend elle même
                // la méthode stringify en paramètre.
                // stringify : 1 er argument : Nombre ou Chaine de caractère
                //             2 ème argument : propriété null 
                //             3 ème argument : Nombre ou Chaine de caractère
                //             4 ème argument : (Si méthode string)

        }
        pre.append(" "); // Ajout de la chaine de caractère à la balise pre
    }
    elConsole.append(pre); //Afficher dans la console
}