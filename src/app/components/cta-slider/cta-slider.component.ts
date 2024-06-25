import { Component } from '@angular/core';
import {NgOptimizedImage} from "@angular/common";
import {RouterLink} from '@angular/router';

@Component({
  selector: 'app-cta-slider',
  standalone: true,
  imports: [
    NgOptimizedImage,
    RouterLink
  ],
  templateUrl: './cta-slider.component.html',
  styleUrl: './cta-slider.component.css'
})
export class CtaSliderComponent {

}
