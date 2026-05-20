import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './MyComponents/navbar/navbar';
import { Footer } from "./MyComponents/footer/footer";
// import {hero1} from "../assets/images/hero-1.jpg"

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NavbarComponent, Footer],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  // hero1 = hero1;
 
}
