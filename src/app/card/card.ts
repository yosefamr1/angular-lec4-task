import { Component, Input, input } from '@angular/core';

@Component({
  selector: 'app-card',
  imports: [],
  templateUrl: './card.html',
  styleUrl: './card.scss'
})
export class Card {
@Input() products:any
}
