class Produit {
    constructor(id, nom, prix) {
        this.id = id;
        this.nom = nom;
        this.prix = prix;
    }
}

//PERMET HERITE LE NOM DE PANIER
class Panier extends Produit{
    constructor(id, nom, prix, quantite) {
        super(id, nom, prix);
        this.quantite = quantite;
    }

    //creer une methode pour calculer le prix total
prixtotal(){
    let prixtotal =0;
    for (let i = 0; i < this.length; i++) {
        prixtotal += this[i].prix * this[i].quantite;
    }
    return prixtotal;
}
    
}

// classe d'objet pour le panier d'achat qui contient un tableau d'instances de ShoppingCartItem.
class ShoppingCartItem {
    constructor() {
        this.produit = []  ;
        
    }
    //Ajoutez les méthodes a l'objet panier d'achat
get count() {
    return this.produit.length;
}
addProduct(produit) {
    this.produit.push(produit);
    
}
deleteProduct(produit) {
    this.produit.splice(this.produit.indexOf(produit), 1);
}
//afficher les elements du panier
showProduit(produit){
    return this.produit;
}


}

//creer des produits
let produit1 = new Produit(1, 'T-shirt', 20);
let produit2 = new Produit(2, 'Pantalon', 30);
let produit3 = new Produit(3, 'Chaussure', 40);
let produit4 = new Produit(4, 'Casquette', 10);
//creer un panier d'achat
let panier = new ShoppingCartItem();
//ajouter des elements dans le panier
panier.addProduct(produit1);
panier.addProduct(produit2);
//afficher le panier
console.log(panier.showProduit());
//supprimer un element du panier
panier.deleteProduct(produit1);



