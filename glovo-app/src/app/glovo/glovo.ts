import { Component } from '@angular/core';

@Component({
  selector: 'app-glovo',
  templateUrl: './glovo.html',
  styleUrls: ['./glovo.css']
})
export class GlovoComponent {
  itemCount = 0;
  showCounter = false;
  showModal = false;
  selectedProduct: any = null;

  products = [
    { title: "McDonald's Burger", description: "Delicious burger delivered by Glovo", image: "https://via.placeholder.com/150" },
    { title: "Pizza", description: "Tasty pizza with fresh ingredients", image: "https://via.placeholder.com/150" },
    { title: "Sushi", description: "Fresh sushi rolls made to order", image: "https://via.placeholder.com/150" }
  ];

  addToCart(product: any) {
    this.itemCount++;
    this.showCounter = true;
  }

  openModal(product: any) {
    this.selectedProduct = product;
    this.showModal = true;
  }

  closeModal() {
    this.showModal = false;
    this.selectedProduct = null;
  }
}
