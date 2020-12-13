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
        let totalPrice = 0;
        contenuPanier.forEach(product => {
            console.log(product.name)
            console.log(product.lense)
            console.log(product.price)
            console.log(product.id)
            totalPrice += product.price;

            allProducts += 
            `<tbody id="eltForm">
                <tr id="msg-panier-vide">
                    <td id="title">${product.name}</td>
                    <td id="lentille">${product.lense}</td>
                    <td id="price">${product.price+"€"}</td>
                    <td id="total">${product.price+"€"}</td>
                </tr>
             </tbody>`  
        });

        eltForm.innerHTML = allProducts; 

//AFFICHER LE MONTANT TOTAL 
let totalAffiche = document.getElementById("totalPrice");
totalAffiche.innerHTML = 'TOTAL: ' + totalPrice + '€';

// AFFICHER LA QUANTITÉ DES PRODUITS DU PANIER DANS LE HEADER
let viewQuantite = document.getElementById("viewQuantite"); 
    if (contenuPanier.length===null){
         viewQuantite.innerHTML = '0'; 
    } else {viewQuantite.innerHTML = '-' + contenuPanier.length + ' articles';}
    }
//VIDER LE PANIER / CLEAR LE LOCAL STORAGE
let btnClear = document.getElementById("btnClear");
btnClear.addEventListener ('click', (event) => {
    localStorage.clear(); 
    document.location.reload();
   }); 

////////////////////////////////VÉRIFICATION DES DONNÉES DU FORMULAIRE////////////////////////////////

let formValid = document.getElementById("bouton_envoi"); 
let form = document.getElementById("form"); 

//1-vérification du nom 
let nom = document.getElementById("nom");
let missNom = document.getElementById("missNom");
  
function validationNom(input , spanMessage){
    let nomValid = /^[A-Za-z\é\è\ê\-]+$/; 
    //Si le champ est vide
    if (input.validity.valueMissing){
        spanMessage.textContent='Nom manquant'; 
        spanMessage.style.color = 'red'; 
        spanMessage.style.display = 'block'; 
        return false;
    //Si le format de données est incorrect
    }else if (nomValid.test(input.value) == false){
        spanMessage.textContent='Format incorrect'; 
        spanMessage.style.color = 'orange'; 
        spanMessage.style.display = 'block'; 
        return false;
    }else {
        spanMessage.style.display = 'none'; 
        return true;
    }
}

//2-vérification du prénom
let prenom = document.getElementById("prenom");
let missPrenom = document.getElementById("missPrenom");
  
function validationPrenom(input , spanMessage){
    let prenomValid = /^[A-Za-z\é\è\ê\-]+$/; 
    //Si le champ est vide
    if (input.validity.valueMissing){
        spanMessage.textContent='Prénom manquant'; 
        spanMessage.style.color = 'red'; 
        spanMessage.style.display = 'block'; 
        return false;
    //Si le format de données est incorrect
    }else if (prenomValid.test(input.value) == false){
        spanMessage.textContent='Format incorrect'; 
        spanMessage.style.color = 'orange'; 
        spanMessage.style.display = 'block'; 
        return false;
    }else {
        spanMessage.style.display = 'none'; 
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
        spanMessage.style.display = 'block'; 
        return false;
    //Si le format de données est incorrect
    }else if (emailValid.test(input.value) == false){
        spanMessage.textContent='Format incorrect'; 
        spanMessage.style.color = 'orange'; 
        spanMessage.style.display = 'block'; 
        return false;
    }else {
        spanMessage.style.display = 'none'; 
        return true;
    }
}

//4-vérification de l'adresse
let adresse = document.getElementById("adresse");
let missAdresse = document.getElementById("missAdresse");
  
function validationAdresse(input , spanMessage){
    let adresseValid = /^[0-9a-z'àâéèêôùûçÀÂÉÈÔÙÛÇ\s-]{1,50}$/;
    //Si le champ est vide
    if (input.validity.valueMissing){
        spanMessage.textContent='Adresse manquante'; 
        spanMessage.style.color = 'red'; 
        spanMessage.style.display = 'block'; 
        return false;
    //Si le format de données est incorrect
    }else if (adresseValid.test(input.value) == false){
        spanMessage.textContent='Format incorrect'; 
        spanMessage.style.color = 'orange'; 
        spanMessage.style.display = 'block'; 
        return false;
    }else {
        spanMessage.style.display = 'none'; 
        return true;
    }
}

//5-vérification du code postal
let codePostal = document.getElementById("codePostal");
let missCodePostal = document.getElementById("missCodePostal");
  
function validationCodePostal(input , spanMessage){
    let codePostalValid = /^[0-9]{5,5}$/;
    //Si le champ est vide
    if (input.validity.valueMissing){
        spanMessage.textContent='Code Postal manquant'; 
        spanMessage.style.color = 'red'; 
        spanMessage.style.display = 'block'; 
        return false;
    //Si le format de données est incorrect
    }else if (codePostalValid.test(input.value) == false){
        spanMessage.textContent='Format incorrect'; 
        spanMessage.style.color = 'orange'; 
        spanMessage.style.display = 'block'; 
        return false;
    }else {
        spanMessage.style.display = 'none'; 
        return true;
    }
}

//6-vérification de la ville
let ville = document.getElementById("ville");
let missVille = document.getElementById("missVille");
  
function validationVille(input , spanMessage){
    let VilleValid = /^[A-Za-z\é\è\ê\-]+$/;
    //Si le champ est vide
    if (input.validity.valueMissing){
        spanMessage.textContent='Ville manquante'; 
        spanMessage.style.color = 'red'; 
        spanMessage.style.display = 'block'; 
        return false;
    //Si le format de données est incorrect
    }else if (VilleValid.test(input.value) == false){
        spanMessage.textContent='Format incorrect'; 
        spanMessage.style.color = 'orange'; 
        spanMessage.style.display = 'block'; 
        return false;
    }else {
        spanMessage.style.display = 'none'; 
        return true;
    }
}
formValid.addEventListener('click', (event) => {
    event.preventDefault();
  
    let resNom = validationNom (nom, missNom); 
    let resPrenom = validationPrenom(prenom, missPrenom); 
    let resEmail = validationEmail(email , missEmail);
    let resAdresse = validationAdresse(adresse , missAdresse);
    let resCodePostal = validationCodePostal(codePostal , missCodePostal);
    let resVille = validationVille(ville , missVille);

    let product_ids = []; 
    contenuPanier.forEach(product => {
        product_ids.push(product.id)
    }); 

    if (resNom && resPrenom && resEmail && resAdresse && resVille && resCodePostal ) {
        // SI TOUS LES CHAMPS SONT CORRECTEMENT REMPLIS, ENVOI DU FORMULAIRE + DONNÉES PANIER VIA L'EVENT SUBMIT EN FORMAT JSON
        let order = {
            contact : {
                firstName : prenom.value, 
                lastName: nom.value,  
                address: adresse.value,
                city: ville.value,
                email: email.value
            },
            products: [product_ids]
        }
        let dataForBack = JSON.stringify(order);
        // APPEL L'API AVEC MÉTHODE POST 
        fetch ("http://localhost:3000/api/cameras/order", 
        {
            method:"POST",
            headers: { "Content-Type" : "application/json" },
            body : dataForBack,
        })
        .then ((data) =>{
            return data.json()
        }).then ((dataCommande) => {
            let contenuCommande = JSON.parse(localStorage.getItem("contenuCommande")); 
               contenuCommande= [];
            contenuCommande.push(dataCommande); 
            localStorage.setItem ("contenuCommande", JSON.stringify(contenuCommande)); 
            window.open("confirmation.html","newFenetre","width=600,height=500");
            document.location.reload();
           
        })
    }
});
window.onload = function(){}