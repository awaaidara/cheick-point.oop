class Produit {
    constructor(id, nom, prix) {
      this.id = id;
      this.nom = nom;
      this.prix = prix;
      this.liked = false; // Ajout de la propriété "liked"
    }
  }
  
  class ShoppingCartItem {
    constructor() {
      this.increaseButtons = document.querySelectorAll(".increase");
      this.decreaseButtons = document.querySelectorAll(".decrease");
      this.deleteButtons = document.querySelectorAll(".delete");
      this.likeButtons = document.querySelectorAll(".like");
      this.totalElement = document.querySelector(".total");
      this.quantityElements = document.querySelectorAll(".quantity");
      this.produits = []; // Tableau pour stocker les produits
      this.init();
    }
  
    init() {
      // Ajouter des événements pour augmenter la quantité
      this.increaseButtons.forEach((button, index) => {
        button.addEventListener("click", () => {
          const produit = [produit1, produit2, produit3][index];
          this.addProduct(produit);
          this.updateTotal();
          this.updateQuantities();
        });
      });
  
      // Ajouter des événements pour diminuer la quantité
      this.decreaseButtons.forEach((button, index) => {
        button.addEventListener("click", () => {
          const produit = [produit1, produit2, produit3][index];
          this.removeOneProduct(produit);
          this.updateTotal();
          this.updateQuantities();
        });
      });
  
      // Ajouter des événements pour supprimer complètement un produit
      this.deleteButtons.forEach((button, index) => {
        button.addEventListener("click", () => {
          const produit = [produit1, produit2, produit3][index];
          this.deleteProduct(produit);
          this.updateTotal();
          this.updateQuantities();
        });
      });
  
      // Ajouter des événements pour les likes
      this.likeButtons.forEach((button, index) => {
        button.addEventListener("click", () => {  
          const produit = [produit1, produit2, produit3][index];
          this.toggleLike(produit, );
          //basculer le style de couleur du bouton
          button.style.color = button.style.color === 'red' ? 'black' : 'red';

        });
      });
      
    }
  
    // Ajouter un produit au panier
    addProduct(produit) {
      this.produits.push(produit);
    }
  
    // Supprimer une occurrence d’un produit
    removeOneProduct(produit) {
      const index = this.produits.findIndex((p) => p.id === produit.id);
      if (index > -1) {
        this.produits.splice(index, 1);
      }
    }
  
    // Supprimer complètement un produit
    deleteProduct(produit) {
      this.produits = this.produits.filter((p) => p.id !== produit.id);
    }
  
    // Mettre à jour le total
    updateTotal() {
      const total = this.produits.reduce((sum, item) => sum + item.prix, 0);
      this.totalElement.textContent = `${total} $`;
    }
  
    // Mettre à jour les quantités visibles
    updateQuantities() {
      const counts = {};
      this.produits.forEach((produit) => {
        counts[produit.id] = (counts[produit.id] || 0) + 1;
      });
  
      this.quantityElements.forEach((element, index) => {
        const produit = [produit1, produit2, produit3][index];
        element.textContent = counts[produit.id] || 0;
      });
    }

  }
  
  // Créer des produits
  const produit1 = new Produit(1, "Baskets", 100);
  const produit2 = new Produit(2, "Socks", 20);
  const produit3 = new Produit(3, "Bag", 50);
  
  // Créer un panier
  const panier = new ShoppingCartItem(); 
