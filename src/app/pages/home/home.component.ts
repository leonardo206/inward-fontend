import { Component } from '@angular/core';
import {MenuComponent} from "../../components/menu/menu.component";
import {NgOptimizedImage} from "@angular/common";
import {CardSliderComponent} from "../../card-slider/card-slider.component";
import {HorizontalScrollComponent} from "../../components/horizontal-scroll/horizontal-scroll.component";
import {HeaderComponent} from "../../components/header/header.component";
import {VideoSliderComponent} from "../../components/video-slider/video-slider.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    MenuComponent,
    NgOptimizedImage,
    CardSliderComponent,
    HorizontalScrollComponent,
    HeaderComponent,
    VideoSliderComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
