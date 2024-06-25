import { Component } from '@angular/core';
import {HorizontalScrollComponent} from "../horizontal-scroll/horizontal-scroll.component";
import {NgOptimizedImage} from "@angular/common";

@Component({
  selector: 'app-home-strategies',
  standalone: true,
  imports: [
    HorizontalScrollComponent,
    NgOptimizedImage
  ],
  templateUrl: './home-strategies.component.html',
  styleUrl: './home-strategies.component.css'
})
export class HomeStrategiesComponent {

}
