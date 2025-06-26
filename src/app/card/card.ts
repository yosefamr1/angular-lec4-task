import { Component, inject, Input, input } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Cartservice } from '../cartservice';
import { WishStore } from '../store/wish.store';

@Component({
  selector: 'app-card',
  imports: [RouterModule],
  templateUrl: './card.html',
  styleUrl: './card.scss'
})
export class Card {
@Input() products:any;

constructor(public cartservice:Cartservice){}

addToCart() {
    // event.stopPropagation(); 
    this.cartservice.addtocart(this.products)
  }

  wish = inject(WishStore);

toggleProduct(event: Event) {
  this.cartservice.toggleProduct(event, this.products);
}

 toggleWish(event: Event, product: any) {
    this.wish.toggleProduct(event, product);
  }

  isInWish(productId: number): boolean {
    return this.wish.isInwish(productId);
  }

}
