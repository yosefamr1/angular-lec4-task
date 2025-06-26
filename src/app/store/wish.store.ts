import { computed, effect } from '@angular/core';
import {
  patchState,
  signalStore,
  watchState,
  withComputed,
  withHooks,
  withMethods,
  withState,
} from '@ngrx/signals';

let initialwishState: any[] = [];
export const WishStore = signalStore(
  //param 1
  { providedIn: 'root' },
  //param 2
  withState({
    wisharr: initialwishState,
  }),

  //param 4
  // withMethods((state) => ({
  //   addtowish: (product: any) =>
  //     patchState(state, {
  //       wisharr: [...state.wisharr(), product],
  //     }),
  //   getWishItems: () => state.wisharr(),
  //     toggleProduct(event: Event, product: any) {
  //   event.stopPropagation();
  //   if (state.isInwish(product.id)) {
  //     this.removefromwish(product.id);
  //   } else {
  //     this.addtowish(product);
  //   }
  // }
  // })),
  withMethods((state) => ({
  addtowish: (product: any) =>
    patchState(state, {
      wisharr: [...state.wisharr(), product],
    }),

  removefromwish: (id: number) =>
    patchState(state, {
      wisharr: state.wisharr().filter(item => item.id !== id),
    }),

  isInwish: (id: number) =>
    state.wisharr().some(item => item.id === id),

  getWishItems: () => state.wisharr(),

  toggleProduct(event: Event, product: any) {
    event.stopPropagation();
    if (this.isInwish(product.id)) {
      this.removefromwish(product.id);
    } else {
      this.addtowish(product);
    }
  }
})),

  //param 5

  withHooks({
    onInit(store) {
      console.log('Store Initialized');


        const watcher = watchState(store, (state) => {
                console.log('Counter changed to:', state.wisharr);
            });

            
            // effect(()=>{
            //     const counter = store.counter();
            //     const state = store.status();
            //     console.log("state has been changed from effect")
            // })
    },
    

    onDestroy(store) {
      console.log('Store Destroyed');
    },
  })
);
