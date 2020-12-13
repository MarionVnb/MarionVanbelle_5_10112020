//récupérer les infos contenues dans le localStorage + les afficher en JavaScript: 
var contenuCommande = localStorage.getItem('contenuCommande');
contenuCommande = JSON.parse(contenuCommande);
console.log(contenuCommande)
console.log(contenuCommande[0].contact.firstName)
console.log(contenuCommande[0].orderId)
console.log(contenuCommande[0].products[0].price)

let prenom = document.getElementById("prenom");
prenom.innerHTML = (contenuCommande[0].contact.firstName)

let numeroCommande = document.getElementById("numeroCommande");
numeroCommande.innerHTML = (contenuCommande[0].orderId)

let montant = document.getElementById("montant");
montant.innerHTML = (contenuCommande[0].products[0].price/100+"€")

let nombreArticle = document.getElementById("nombreArticle");
nombreArticle.innerHTML = (contenuCommande[0].products.length)

//VIDER LE PANIER / CLEAR LE LOCAL STORAGE
let btnClear = document.getElementById("btnClear");
btnClear.addEventListener ('click', (event) => {
    window.close();
    localStorage.clear(); 
    document.location.reload();
   }); 