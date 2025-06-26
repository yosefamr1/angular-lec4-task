import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class Cartservice {
  private cart: any[] = [];

  getcartitems() {
    return this.cart;
  }

  addtocart(product: any) {
    // this.cart.push(product)
    const existing = this.cart.find((item) => item.id === product.id);
    if (existing) {
      existing.quantity += 1;
    } else {
      this.cart.push({ ...product, quantity: 1 });
    }
  }
 




  isInCart(productId: string | number): boolean {
    return this.cart.some((p) => p.id === productId);
  }

  toggleProduct(event: Event, product: any) {
    event.stopPropagation();
    if (this.isInCart(product.id)) {
      this.removeFromCart(product.id);
    } else {
      this.addtocart(product);
    }
  }



  removeFromCart(id: number) {
    this.cart = this.cart.filter((item) => item.id !== id);
    
  }

  increaseQuantity(id: number) {
    const item = this.cart.find((item) => item.id === id);
    if (item) item.quantity += 1;
  }

  decreaseQuantity(id: number) {
    const item = this.cart.find((item) => item.id === id);
    if (item && item.quantity > 1) {
      item.quantity -= 1;
    }
  }

  // clearCart() {
  //   this.cart = [];
  // }
}
