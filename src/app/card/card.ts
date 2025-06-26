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

constructor(private cartservice:Cartservice){}

addToCart() {
    // event.stopPropagation(); 
    this.cartservice.addtocart(this.products)
  }

  wish = inject(WishStore);


}
