//Récupérer les infos contenues dans le localStorage + les afficher en JavaScript: 
var contenuCommande = localStorage.getItem('contenuCommande');
contenuCommande = JSON.parse(contenuCommande);

//Récupérer le montant total du panier
let totalPrice = 0;
contenuCommande[0].products.forEach(product => {
    totalPrice += product.price
});

//Insérer les informations dans le HTML
let prenom = document.getElementById("prenom");
prenom.innerHTML = (contenuCommande[0].contact.firstName);

let numeroCommande = document.getElementById("numeroCommande");
numeroCommande.innerHTML = (contenuCommande[0].orderId);

let montant = document.getElementById("montant");
montant.innerHTML = (totalPrice/100+"€");

let nombreArticle = document.getElementById("nombreArticle");
nombreArticle.innerHTML = (contenuCommande[0].products.length);

//Vider le localStorage
localStorage.clear(); 

//Retour à la page d'accueil
let btnRetour = document.getElementById("btnRetour");
btnRetour.addEventListener ('click', (event) => {
    window.location.replace("index.html")
}); 