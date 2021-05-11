// intro boucle while 
// let num = 0;

// while (num <= 3) {
//     console.log(num);
//     num ++;
// }

// let mdp = prompt("entre le mdp correct");

// while (mdp !== "crabe") {
//     mdp = prompt("reesayé !");
// }
// alert("mdp correct")






// exo1 - 
// - A l'aide d'un prompt, choisissez un chiffre et enregistrez la valeur dans une variable
// - Déclarez une variable compteur qui commence par 0
// - A l'aide d'une boucle while, incrémentez de 1 la variable compteur à chaque boucle et affichez touts les chiffres de 0 jusqu'au nombre choisis au debut dans le prompt
// let reponseChiffre = prompt("choisi un chiffre");
// let compteur = 0;

// while (reponseChiffre >= compteur) {
//     compteur ++;
//     console.log(compteur);
// }






// exo2 
// - Créez une variable classe avec un array
// - A l'aide d'un prompt, choisissez le nombre max d'étudiants dans la classe
// - A l'aide d'une boucle while, inserez des étudiants dans la classe tant que la classe n'est pas remplie
// - Après avoir rempli la classe, affichez tous les etudiants
// let classe = [];
// let max = prompt("choisissez le nombre max d'étudiants dans la classe");
// let compteur = 0;
// while (max >= compteur) {
//     compteur++;
//     classe.push(compteur);
// }
// console.log(classe);
// // correction de fanny
// let classe = [];
// let nomEleve;
// let nbMax = prompt("Nombre max d'élèves ?");

// while(classe.length < nbMax){
//     nomEleve = prompt("Entrez un nom d'élève");
//     classe.push(nomEleve);
// }
// console.log(classe);
// alert("Le nombre d'élèves est suffisant !");




// exo3 
// - Créer un tableau de 9 prénoms 
// - Faire une boucle sur les prénoms précédé de Bonjour tant que 9 n'est pas atteint et les affiché dans la console
// - Astuce : let i = 0;
// - Astuce 2 : (i < 9)
// let prenom = ["agim","bekir","adem","chris","bella","afer","demo","tila","biba"];
// let compteur = -1;
// prenom.forEach(element => {
//     compteur++;
//     if (compteur < prenom.length) {
//         console.log(`bonjour ${prenom[compteur]}`);
//     }
// });
// correction de fanny 
// let tab = ["Nasila", "Mouna", "Adil", "Seifedin", "Stan", "Chris", "Ali", "Django", "Cactus"];
// let i = 0;
// while(i < 9){
//     console.log(`Bonjour ${tab[i]}`);
//     i++;
// }





// exo4 
// - Créer un tableau de 6 fruits
// - Avec l'aide d'une boucle while vider le tableau.
// - Utilisez fruits.length
// let fruits = ["pomme", "citron", "orange", "ananas", "mandarin", "poire"];
// console.log(fruits);
// while (fruits.length != 0) {
//     fruits.shift();
// }
// console.log(fruits);
// correction de fanny 
// let fruits = ["groseilles", "prunes", "fraises", "mûres", "pommes", "poires"];
// while(fruits.length > 0){
//     fruits.pop();
//     console.log(fruits);
// }




// exo5
// - Créer un tableau de 4 légumes du nom de 'panierLegumes'
// - Stocker la longueur du tableau dans une variable du nom de 'longeur'
// - Vider le tableau panierLegumes pour mettre son contenu dans un second tableau du nom de 'caisseLegumes'
// let panierLegumes = ["laitue", "tomate", "ognion", "salsifis"];
// let caisseLegumes = [];
// let longueur = panierLegumes.length-1;
// console.log(panierLegumes);
// console.log(caisseLegumes);

// for (let i = longueur; i >= 0 ; i--) {
//     if (caisseLegumes[i] != 0) {
//         caisseLegumes.push(panierLegumes[i]);
//         panierLegumes.splice(i, 1);
//     }
// }
// console.log(panierLegumes);
// console.log(caisseLegumes.reverse());
// correction fanny avec POP()
// let panierLegumes = ["chou-fleur", "poireau", "courgette", "carotte"];
// let longueur = panierLegumes.length-1;
// let caisseLegumes = [];

// while(longueur >= 0){
//     caisseLegumes.push(panierLegumes[longueur]);
//     panierLegumes.pop();
//     console.log(panierLegumes);
//     console.log(caisseLegumes);
//     longueur--;
// }
// correction fanny avec shift() 
// let panierLegumes = ["chou-fleur", "poireau", "courgette", "carotte"];
// let longueur = panierLegumes.length-1;
// let caisseLegumes = [];

// while(longueur >= 0){
//     caisseLegumes.push(panierLegumes[0]);
//     panierLegumes.shift();
//     console.log(panierLegumes);
//     console.log(caisseLegumes);
//     longueur--;
// }



// exo6 
// - Préparer une énigme, et faites une boucle WHILE qui va vérifier si l'utilisateur répond correctement à l'énigme via un prompt, tant qu'il se trompe, vous lui reposer la question. S'il a juste, faites une alerte qui le félicite
// let repEnigme = prompt("J'ai un dos et 4 pied, que suis-je ?");

// while (repEnigme !== "la chaise") {
//     repEnigme = prompt("faux, réessayé !");  
// }
// alert("c'est ca !!!");
// correction de fanny 
// let guess = prompt("Je commence la nuit et je finis le matin, qui suis-je ?").toLowerCase();

// while(guess != "n"){
//     guess = prompt("Je commence la nuit et je finis le matin, qui suis-je ?").toLowerCase();
// }

// alert("Félicitations");