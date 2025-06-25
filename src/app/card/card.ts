import { Component, Input, input } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-card',
  imports: [RouterModule],
  templateUrl: './card.html',
  styleUrl: './card.scss'
})
export class Card {
@Input() products:any
}
