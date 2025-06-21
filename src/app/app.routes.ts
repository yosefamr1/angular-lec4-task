import { Routes } from '@angular/router';

export const routes: Routes = [
     {
    path: '',loadComponent: () => import('./cards/cards').then((m) => m.Cards),
    pathMatch:"full",
  },
  {
    path: 'cart',loadComponent: () => import('./cart/cart').then((m) => m.Cart),
    pathMatch:"full",
  },
];
