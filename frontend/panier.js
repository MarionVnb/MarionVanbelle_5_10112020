//récupérer les infos contenues dans le localStorage + l'afficher en JavaScript: 
var contenuPanier = localStorage.getItem('contenuPanier');
contenuPanier = JSON.parse(contenuPanier);

//s'il n'y a aucune info de stocker, afficher "votre panier est vide": 
    if (contenuPanier===null){
        const emptybag = document.getElementById ('msg-panier-vide'); 
        emptybag.innerHTML = 'Votre panier est vide'; 
            
    }else { //Si le panier n'est pas vide, afficher les infos produit:   
        let eltForm = document.getElementById("eltForm")
        let allProducts = "";

        contenuPanier.forEach(product => {
            console.log(product.name)
            console.log(product.lense)
            console.log(product.price)

            allProducts += 
            `<tbody id="eltForm">
                <tr id="msg-panier-vide">
                    <td id="title">${product.name}</td>
                    <td id="lentille">${product.lense}</td>
                    <td id="price">${product.price+"€"}</td>
                    <td id="total"></td>
                </tr>
             </tbody>`

            const price = product.price; 
            const calculateTotal = () => {
            if(contenuPanier.length ===0){
                return 0; 
            }else{
            let sum = 0; 
            for (let price of contenuPanier){
                sum +=price; 
                
            }
            calculateTotal(contenuPanier.length); 
            console.log(sum)
            }
        }         
        });
        eltForm.innerHTML = allProducts; 
    }


//VÉRIFICATION DES DONNÉES DU FORMULAIRE

let formValid = document.getElementById("bouton_envoi"); 
let form = document.getElementById("form"); 

//1-vérification du nom 
let nom = document.getElementById("nom");
let missNom = document.getElementById("missNom");
  
function validationNom(input , spanMessage){
    let nomValid = /^[A-Za-zéèîïÉÈÎÏ] [a-zéèêàçîï]+([-'\s] [a-zA-ZéèîïÉÈÎÏ] [a-zéèêàçîï]+)?$/; 
    //Si le champ est vide
    if (input.validity.valueMissing){
        spanMessage.textContent='Nom manquant'; 
        spanMessage.style.color = 'red'; 
        return false;
    //Si le format de données est incorrect
    }else if (nomValid.test(input.value) == false){
        spanMessage.textContent='Format incorrect'; 
        spanMessage.style.color = 'orange'; 
        return false;
    }else {
        return true;
    }
        
    
}

//2-vérification du prénom
let prenom = document.getElementById("prenom");
let missPrenom = document.getElementById("missPrenom");
  
function validationPrenom(input , spanMessage){
    let prenomValid = /^[A-Za-zéèîïÉÈÎÏ] [a-zéèêàçîï]+([-'\s] [a-zA-ZéèîïÉÈÎÏ] [a-zéèêàçîï]+)?$/; 
    //Si le champ est vide
    if (input.validity.valueMissing){
        spanMessage.textContent='Prénom manquant'; 
        spanMessage.style.color = 'red'; 
        return false;
    //Si le format de données est incorrect
    }else if (prenomValid.test(input.value) == false){
        spanMessage.textContent='Format incorrect'; 
        spanMessage.style.color = 'orange'; 
        return false;
    }else {
        return true;
    }
}

//3-vérification du mail 
let email = document.getElementById("email");
let missEmail = document.getElementById("missEmail");
  
function validationEmail(input , spanMessage){
    let emailValid = /^[A-Za-z0-9](([_\.\-]?[a-zA-Z0-9]+)*)@([A-Za-z0-9]+)(([_\.\-]?[a-zA-Z0-9]+)*)\.([A-Za-z]{2,})$/;
    //Si le champ est vide
    if (input.validity.valueMissing){
        spanMessage.textContent='Email manquant'; 
        spanMessage.style.color = 'red'; 
        return false;
    //Si le format de données est incorrect
    }else if (emailValid.test(input.value) == false){
        spanMessage.textContent='Format incorrect'; 
        spanMessage.style.color = 'orange'; 
        return false;
    }else {
        return true;
    }
}

//3-vérification de l'adresse
let adresse = document.getElementById("adresse");
let missAdresse = document.getElementById("missAdresse");
  
function validationAdresse(input , spanMessage){
    let adresseValid = /^[A-Za-z0-9](([_\.\-]?[a-zA-Z0-9]+)*)@([A-Za-z0-9]+)(([_\.\-]?[a-zA-Z0-9]+)*)\.([A-Za-z]{2,})$/;
    //Si le champ est vide
    if (input.validity.valueMissing){
        spanMessage.textContent='Adresse manquante'; 
        spanMessage.style.color = 'red'; 
        return false;
    //Si le format de données est incorrect
    }else if (adresseValid.test(input.value) == false){
        spanMessage.textContent='Format incorrect'; 
        spanMessage.style.color = 'orange'; 
        return false;
    }else {
        return true;
    }
}

//3-vérification de la ville
let ville = document.getElementById("ville");
let missVille = document.getElementById("missVille");
  
function validationVille(input , spanMessage){
    let VilleValid = /^[A-Za-z0-9](([_\.\-]?[a-zA-Z0-9]+)*)@([A-Za-z0-9]+)(([_\.\-]?[a-zA-Z0-9]+)*)\.([A-Za-z]{2,})$/;
    //Si le champ est vide
    if (input.validity.valueMissing){
        spanMessage.textContent='Ville manquante'; 
        spanMessage.style.color = 'red'; 
        return false;
    //Si le format de données est incorrect
    }else if (VilleValid.test(input.value) == false){
        spanMessage.textContent='Format incorrect'; 
        spanMessage.style.color = 'orange'; 
        return false;
    }else {
        return true;
    }
}

formValid.addEventListener('click', (event) => {
    event.preventDefault();
    //alert('sub,it ,y for,');
    let resNom = validationNom (nom, missNom); 
    let resPrenom = validationPrenom(prenom, missPrenom); 
    let resEmail = validationEmail(email , missEmail);
    let resAdresse = validationAdresse(adresse , missAdresse);
    let resVille = validationVille(ville , missVille);

    if (resNom) {
        alert('tout est ok')
    }
    if (resPrenom) {
        alert('tout est ok')
    }
    if (resEmail) {
        alert('tout est ok')
    }
    if (resAdresse) {
        alert('tout est ok')
    }
    if (resVille) {
        alert('tout est ok')
    }

});

     