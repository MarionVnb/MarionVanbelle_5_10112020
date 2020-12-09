function getId() {
    const param = window.location.search; 
    console.log(window.location.search)
    const id = param.replace("?id=", "");
    return id; 
}


fetch ("http://localhost:3000/api/cameras/"+id, {method:"GET"})
    .then ((data) =>{
        return data.json()
    }).then ((product) => {
        let eltCards = document.getElementById("box-card")
        console.log(product)
        
        let allProducts = ''
     

            allProducts += 
            `<div class="col">
                <div class="card border-light shadow">
                    <img class="card-img-top" src=${product.imageUrl} alt="">
                    <div class="card-body">
                        <h5 class="card-title">${product.name} <i class="far fa-heart"></i></h5>
                        <p class="card-text">${product.description}</p>
                        <p class="card-price">${product.price + "€"}</p>
                    </div>
                </div>
            </div>`
            
        console.log(allProducts)
        eltCards.innerHTML = allProducts
        // afficher les différentes lentilles dans un menu déroulant : 
        let eltLense = document.getElementById("select")
        let allLenses= "";
        product.lenses.forEach((lense)=> {
        allLenses+='<option>'+lense +'</option>'
        })
        
        console.log(allLenses)

         eltLense.innerHTML = allLenses
    })

window.onload = function(){
}