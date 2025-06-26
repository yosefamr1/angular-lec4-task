import { Component, inject } from '@angular/core';
import { WishStore } from '../store/wish.store';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-wishlist-component',
  imports: [CommonModule,RouterModule],
  templateUrl: './wishlist-component.html',
  styleUrl: './wishlist-component.scss'
})
export class WishlistComponent {
  wish = inject(WishStore);
  wisharr= this.wish.wisharr()

  
}
