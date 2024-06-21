import { Component, ElementRef, ViewChild } from '@angular/core';
import {NgClass, NgOptimizedImage} from "@angular/common";

@Component({
  selector: 'app-card-slider',
  templateUrl: './card-slider.component.html',
  standalone: true,
  imports: [
    NgClass,
    NgOptimizedImage
  ],
  styleUrls: ['./card-slider.component.scss']
})
export class CardSliderComponent {
  @ViewChild('scrl') scrl: ElementRef | undefined;

  title = 'Top Deals';
  scrollX = 0;
  scrollEnd = false;

  slide(shift: number) {
    if (this.scrl) {
      this.scrl.nativeElement.scrollBy({
        left: shift,
        behavior: 'smooth'
      });

      this.scrl.nativeElement.scrollLeft += shift;
      this.scrollX += shift;

      this.scrollCheck();
    }
  }

  scrollCheck() {
    if (this.scrl) {
      this.scrollX = this.scrl.nativeElement.scrollLeft;
      this.scrollEnd = Math.floor(this.scrl.nativeElement.scrollWidth - this.scrl.nativeElement.scrollLeft) <= this.scrl.nativeElement.offsetWidth;
    }
  }
}
