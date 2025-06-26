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
  withMethods((state) => ({
    addtowish: (product: any) =>
      patchState(state, {
        wisharr: [...state.wisharr(), product],
      }),
    getWishItems: () => state.wisharr(),
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
