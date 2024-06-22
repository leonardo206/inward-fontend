import {Component, OnInit, Input, Renderer2, ElementRef} from '@angular/core';
import {NgClass, NgForOf, NgIf, NgOptimizedImage} from "@angular/common";

interface ScrollItem {
  key: string;
  text: string;
  imagePath: string;
}

@Component({
  selector: 'app-horizontal-scroll',
  templateUrl: './horizontal-scroll.component.html',
  standalone: true,
  imports: [
    NgClass,
    NgForOf,
    NgOptimizedImage,
    NgIf
  ],
  styleUrls: ['./horizontal-scroll.component.css']
})
export class HorizontalScrollComponent implements OnInit {
  @Input() direction: 'left' | 'right' = 'left';
  @Input() speed: 'slow' | 'fast' = 'fast';
  items: ScrollItem[] = [];

  constructor(private renderer: Renderer2, private el: ElementRef) {}

  ngOnInit() {
    if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      this.addAnimation();
    }

    this.items = [
      {
        key: 'experiment',
        text: 'EXPERIMENT',
        imagePath: '/assets/approach-experimentation.svg'
      },
      {
        key: 'design',
        text: 'DESIGN',
        imagePath: '/assets/approach-collaboration.svg'
      },
      {
        key: 'develop',
        text: 'DEVELOP',
        imagePath: '/assets/approach-implementation.svg'
      },
      {
        key: 'testing',
        text: 'TESTING',
        imagePath: '/assets/approach-testing.svg'
      }
    ];

    this.items = [...this.items, ...this.items, ...this.items];

  }

  ngAfterViewInit() {
    this.addAnimation();
  }

  addAnimation() {
    const scrollers = this.el.nativeElement.querySelectorAll(".scroller");
    scrollers.forEach((scroller: HTMLElement) => {
      this.renderer.setAttribute(scroller, "data-animated", "true");
      const scrollerInner = scroller.querySelector(".scroller__inner");
      // @ts-ignore
      const scrollerContent = Array.from(scrollerInner.children);
      scrollerContent.forEach((item: Element) => {
        const duplicatedItem = item.cloneNode(true) as HTMLElement;
        duplicatedItem.setAttribute("aria-hidden", "true");
        // @ts-ignore
        scrollerInner.appendChild(duplicatedItem);
      });
    });
  }
}
