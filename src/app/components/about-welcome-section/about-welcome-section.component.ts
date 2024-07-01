import { Component } from '@angular/core';
import {NgOptimizedImage} from "@angular/common";

@Component({
  selector: 'app-about-welcome-section',
  standalone: true,
  imports: [
    NgOptimizedImage
  ],
  templateUrl: './about-welcome-section.component.html',
  styleUrl: './about-welcome-section.component.css'
})
export class AboutWelcomeSectionComponent {

}
