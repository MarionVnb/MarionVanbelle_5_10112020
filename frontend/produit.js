
const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const id = urlParams.get("id"); 

fetch ("http://localhost:3000/api/cameras/"+id, {method:"GET"})
    .then ((data) =>{
        return data.json()
    }).then ((product) => {
        let eltCards = document.getElementById("box-card")
        console.log(product)
        
        let allProducts = "";
     

            allProducts += 
            `<div class="col">
                <div class="card border-light shadow">
                    <img class="card-img-top" src=${product.imageUrl} alt="">
                    <div class="card-body">
                        <h5 class="card-title">${product.name}</h5>
                        <p class="card-text">${product.description}</p>
                        <p class="card-price">${product.price + "€"}</p>
                        <a class="btn btn-primary" href="produit.html" role="button">Voir le produit</a>
                    </div>
                </div>
            </div>`
            

        console.log(allProducts)

        eltCards.innerHTML = allProducts
    })

window.onload = function(){
}
