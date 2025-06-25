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

constructor(private cartservice:Cartservice){}
ngOnInit() {
this.cartitems=this.cartservice.getcartitems()
console.log(this.cartitems);

}



}
