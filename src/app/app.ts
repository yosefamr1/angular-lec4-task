import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Cards } from "./cards/cards";
import { Nav } from "./nav/nav";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Cards, Nav],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected title = 'angular-lec4-task';
}
