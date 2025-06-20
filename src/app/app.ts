import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Cards } from "./cards/cards";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Cards],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected title = 'angular-lec4-task';
}
