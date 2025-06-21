import { Component, Input, input, OnInit, signal } from '@angular/core';
import { HTTP } from '../http';
import { Card } from '../card/card';

@Component({
  selector: 'app-cards',
  imports: [Card],
  templateUrl: './cards.html',
  styleUrl: './cards.scss'
})
export class Cards implements OnInit {
 products:any[] = [];
constructor(private httpServicen:HTTP){}

ngOnInit(){
this.httpServicen.getproducts().subscribe({
  next:(data:any) =>this.products= data.products as any[]
})
}




}
