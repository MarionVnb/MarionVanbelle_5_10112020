// Requête FETCH vers l'API pour l'affichage des produits : 
fetch ("http://localhost:3000/api/cameras", {method:"GET"})
    .then ((data) =>{
        return data.json()
    }).then ((Products) => {
        let eltCards = document.getElementById("box-card"); 
        let allProducts = "";
        //Boucle afin de récupérer les informations de chacun des produits
        Products.forEach( (product) => {
            console.log(product.name)
            console.log(product.price)
            console.log(product.id)
            console.log(product.description)
            console.log(product.imageUrl)
            
            allProducts += 
            `<div class="col-12 col-lg-4">
                <div class="card border-light shadow mt-4">
                    <img class="card-img-top" src=${product.imageUrl} alt="">
                    <div class="card-body">
                        <h5 class="card-title">${product.name}</h5>
                        <p class="card-text">${product.description}</p>
                        <p class="card-price">${product.price / 100 + "€"}</p>
                        <a class="btn btn-dark" href="produit.html?id=${product._id}" role="button">Voir le produit</a>
                    </div>
                </div>
            </div>`
        })
        // Insertion des infos produits dans le HTML 
        eltCards.innerHTML = allProducts
    })

//AFFICHAGE QUANTITÉ PRODUIT DANS LE HEADER / ICONE PANIER 
let contenuPanier = JSON.parse(localStorage.getItem("contenuPanier"));
let viewQuantite = document.getElementById("viewQuantite"); 
if (contenuPanier === null){
    viewQuantite.innerHTML = ''; 
} else {
    viewQuantite.innerHTML = '-' + contenuPanier.length + ' articles';
}

