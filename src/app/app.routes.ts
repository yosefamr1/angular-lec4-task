import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./cards/cards').then((m) => m.Cards),
    pathMatch: 'full',
  },
  {
    path: 'cart',
    loadComponent: () => import('./cart/cart').then((m) => m.Cart),
    pathMatch: 'full',
  },
  {
    path: 'product/:id',
    loadComponent: () =>
      import('./product-details/product-details').then((m) => m.ProductDetails),
    pathMatch: 'full',
  },
  {
    path: 'wish',
    loadComponent: () =>
      import('./wishlist-component/wishlist-component').then(
        (m) => m.WishlistComponent
      ),
    pathMatch: 'full',
  },
  {
    path: 'login',
    loadComponent: () =>
      import('./template-forms/template-forms.component').then(
        (m) => m.TemplateFormsComponent
      ),
    pathMatch: 'full',
  },
  {
    path: 'register',
    loadComponent: () =>
      import('./reactive-forms/reactive-forms.component').then(
        (m) => m.ReactiveFormsComponent
      ),
    pathMatch: 'full',
  },
];
