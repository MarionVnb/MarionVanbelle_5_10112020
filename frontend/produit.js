//RÉCUPÉRATION DES INFOS PRODUIT GRÂCE À L'ID --> Variable pour chaque ID
const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get("id"); 

//RÉCUPÉRATION DE L'URL DES PRODUITS - INSERTION DANS LE DOM
fetch ("http://localhost:3000/api/cameras/"+id, {method:"GET"})
    .then ((data) =>{
        return data.json()
    }).then ((product) => {
        let eltCards = document.getElementById("box-card")
        let allProducts = ''
            allProducts += 

//AFFICHAGE DES INFOS DANS LE HTML: 
            `<div class="card border-light shadow">
                <img class="card-img-top" src=${product.imageUrl} alt="">
                <div class="card-body">
                    <h5 class="card-title">${product.name} <i class="far fa-heart"></i></h5>
                    <p class="card-text">${product.description}</p>
                    <p class="card-price">${product.price /100 + "€"}</p>
                </div>
            </div>`
        eltCards.innerHTML = allProducts

// AFFICHER LES DIFFÉRENTES LENTILLES DANS UN MENU DÉROULANT : 
        let eltLense = document.getElementById("select"); 
        let allLenses= "";
        product.lenses.forEach((lense)=> {
        allLenses+='<option>'+lense +'</option>'
        })

         eltLense.innerHTML = allLenses; 

// RÉCUPÉRER LE BOUTON
         const btn = document.getElementById('shop-btn'); 

//AU CLIC --> ENVOI AU LOCAL STORAGE VIA LA FONCTION ajoutPanier: 
         btn.addEventListener ("click", function () {
             ajoutPanier();  
            }); 

//fonction ajoutPanier
        function ajoutPanier(){
            let lenseSelected = eltLense.value;  //lentille sélectionnée
            let dataProduct =                   // produit sélectionné
                {
                name : product.name, 
                id : product._id, 
                lense:lenseSelected,
                img: product.imageUrl,
                quantity:1, 
                price: product.price / 100, 
                total: product.price / 100, 
                }
                ; //est ce que ca doit être inclu dans un tableau ou pas ? 

            let contenuPanier = JSON.parse(localStorage.getItem("contenuPanier")); 
            if (contenuPanier === null) {
               contenuPanier = [];
            } else {
                let produitDejaDansPanier = contenuPanier.find(product => product.name === dataProduct.name);
                produitDejaDansPanier.quantity ++; 
                dataProduct.total = produitDejaDansPanier.price * produitDejaDansPanier.quantity;
            }
                     contenuPanier.push(dataProduct); 
                    localStorage.setItem ("contenuPanier", JSON.stringify(contenuPanier));  
                    document.getElementById("message-panier").style.display = "block"; 
                    //alert ('Le produit a été ajouté au panier') 
                    
                
            }
    }); 

window.onload = function(){}
