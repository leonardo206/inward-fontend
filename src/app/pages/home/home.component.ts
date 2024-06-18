import { Component } from '@angular/core';
import {MenuComponent} from "../../components/menu/menu.component";
import {NgOptimizedImage} from "@angular/common";

@Component({
  selector: 'app-home',
  standalone: true,
    imports: [
        MenuComponent,
        NgOptimizedImage
    ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
