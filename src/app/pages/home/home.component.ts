import { Component } from '@angular/core';
import {MenuComponent} from "../../components/menu/menu.component";
import {NgOptimizedImage} from "@angular/common";
import {CardSliderComponent} from "../../card-slider/card-slider.component";
import {HorizontalScrollComponent} from "../../horizontal-scroll/horizontal-scroll.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    MenuComponent,
    NgOptimizedImage,
    CardSliderComponent,
    HorizontalScrollComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
