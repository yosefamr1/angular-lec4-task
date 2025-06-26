import { Component, inject } from '@angular/core';
import { WishStore } from '../store/wish.store';

@Component({
  selector: 'app-wishlist-component',
  imports: [],
  templateUrl: './wishlist-component.html',
  styleUrl: './wishlist-component.scss'
})
export class WishlistComponent {
  wish = inject(WishStore);
  wisharr= this.wish.wisharr()

  
}
