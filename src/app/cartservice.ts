import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Cartservice {

 private cart: any[] = [];

  getcartitems() {
    return this.cart;
  }

  addtocart(product:any){
    this.cart.push(product)
  }
}
