import {Component, HostListener} from '@angular/core';
import {NgOptimizedImage} from "@angular/common";

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    NgOptimizedImage
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  @HostListener('window:scroll', [])
  onWindowScroll(): void {
    const scrolled = window.scrollY;
    const headerContainer = document.querySelector('.header-container') as HTMLElement;
    const centeredText = document.querySelector('.centered-text') as HTMLElement;
    const textBelow = document.querySelector('.text-below') as HTMLElement;

    const fadeStart = 100;
    const fadeEnd = 400;

    if (scrolled <= fadeEnd) {
      const opacity = 1 - ((scrolled - fadeStart) / (fadeEnd - fadeStart));
      const scale = 1 - ((scrolled - fadeStart) / (fadeEnd - fadeStart)) * 0.5;

      centeredText.style.opacity = opacity.toString();
      centeredText.style.transform = `scale(${scale})`;

      textBelow.style.opacity = opacity.toString();
      textBelow.style.transform = `scale(${scale})`;
    } else {
      centeredText.style.opacity = '0';
      centeredText.style.transform = 'scale(0.5)';

      textBelow.style.opacity = '0';
      textBelow.style.transform = 'scale(0.5)';
    }

    headerContainer.style.transform = `translateY(${scrolled * -0.4}px)`;
  }
}
