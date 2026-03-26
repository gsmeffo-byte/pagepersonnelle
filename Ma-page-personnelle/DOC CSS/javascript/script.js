 console.log("Mon script fonctionne");
 const nom = "Meffo";
 const prenom = "Gesmira";
const promotion ="Bachelor";
const annee = "2026"

const competences =[
    "HTML5",
    "CSS3",
    "Flexbox",
    "Responsive Design",
    "Javascript",
];
//concatener prenom + nom
function getNomComplet() {
    return prenom + "" + nom;
}

function afficherBienvenue(){
    const msg = `Bienvenue sur le portfolio ${getNomComplet()}`;
    console.log(msg);
    console.log(`Promotion : ${promotion} -  ${annee}`);
}
//fonction lister competences()
function listerCompetences(){
    console.log('---Mes competences----');
    for(const c of competences){
        console.log('check' + c);
    }
}

// Apelle de deux fonctions
afficherBienvenue();
listerCompetences();

//Toggle competences
//varieble qui suit l'etat

let competencesVisibles = true;


function toggleCompetences(){
    const grille= document.getElementById('competences');
    const boutton = document.getElementById('btn-competences');
   
    if (competencesVisibles) {
//Si visible -> on 

grille.style.display ='none';
 boutton.textContent  = 'Afficher les compétences';


competencesVisibles = false;
    }else{
        //Si masque -> on affiche
        grille.style.display = 'block';
        boutton.textContent = 'Masquer les compétences';
       
        
        competencesVisibles = true;
        }
        console.log('Compétences visibles:', competencesVisibles);
    
 }

 //Validation du Formulaire
 function ValidationFormulaire(){
    //Recupere les valeurs
    const nom = document.getElementById('nom').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').valeur;
 }

 //verifie que nom nest pas vide
 if(nom ===""){
    alert('Merci de saisir votre nom.');
    return false; //<- Bloque l'envoi
 }

 // verifie que email nest pas vide
 if (email === '') {
    alert('Merci de saisir votre adresse email.');
    return false;
 }

 // verifie que fait au moins 10 caractere
 if (message.length < 10) {
    alert('Votre message doit faire au moins 10 caractères.');
    return false;
}
 // Tout est OK  
 console.log('Formulaire valide ! Envoi en cours...');
 console.log({ nom, email, message });
 return true; // <- Autorise l'envoi     


    

    

