import { Component, inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import { WishStore } from '../store/wish.store';
import { Cartservice } from '../cartservice';

@Component({
  selector: 'app-nav',
  imports: [RouterModule],
  templateUrl: './nav.html',
  styleUrl: './nav.scss'
})
export class Nav {
wish:any = inject(WishStore)
constructor(public cart:Cartservice ){}



}
