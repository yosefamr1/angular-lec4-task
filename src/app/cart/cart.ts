import { Component, OnInit } from '@angular/core';
import { Cartservice } from '../cartservice';
@Component({
  selector: 'app-cart',
  imports: [],
  templateUrl: './cart.html',
  styleUrl: './cart.scss'
})
export class Cart implements OnInit {
cartitems:any[]=[];

constructor(private cartService:Cartservice){}
ngOnInit() {
this.cartitems=this.cartService.getcartitems()
}

removeItem(id: number) {
    this.cartService.removeFromCart(id);
  }

  increase(id: number) {
    this.cartService.increaseQuantity(id);
  }

  decrease(id: number) {
    this.cartService.decreaseQuantity(id);
  }


}
