import { Component } from '@angular/core';
import {NgForOf, NgOptimizedImage} from "@angular/common";

@Component({
  selector: 'app-testimonials-section',
  standalone: true,
  imports: [
    NgForOf,
    NgOptimizedImage
  ],
  templateUrl: './testimonials-section.component.html',
  styleUrl: './testimonials-section.component.css'
})
export class TestimonialsSectionComponent {
  testimonials: Testimonial[] = [
    {
      keywords: ['AGILE', 'EXPERTS', 'SUPPORTIVE'],
      ratingLabel: 'STANDARD',
      stars: 2,
      clientName: 'BUCCE RESTAURANT',
      clientLocation: 'Miami, Florida',
      hoverText: 'What a great experience. I initially came on board seeking help with a logo. I now have an identity I couldn\'t be more proud of. The team went above and beyond to completely fill my expectations.'
    },
    {
      keywords: ['AGILE', 'EXPERTS', 'SUPPORTIVE'],
      ratingLabel: 'STANDARD',
      stars: 3,
      clientName: 'BUCCE RESTAURANT',
      clientLocation: 'Miami, Florida',
      hoverText: 'Great service, highly recommended!'
    },
    {
      keywords: ['AGILE', 'EXPERTS', 'SUPPORTIVE'],
      ratingLabel: 'STATIC',
      stars: 1,
      clientName: 'BUCCE RESTAURANT',
      clientLocation: 'Miami, Florida',
      hoverText: 'What a great experience. I initially came on board seeking help with a logo. I now have an identity I couldn\'t be more proud of. The team went above and beyond to completely fill my expectations.What a great experience. I initially came on board seeking help with a logo. I now have an identity I couldn\'t be more proud of. The team went above and beyond to completely fill my expectations.'
    }
  ];

  seeAllTestimonials() {
    console.log('Show all testimonials');
  }

  generateArray(length: number): number[] {
    return Array.from({ length }, (_, i) => i);
  }
}

interface Testimonial {
  keywords: string[];
  ratingLabel: string;
  stars: number;
  clientName: string;
  clientLocation: string;
  hoverText: string;
}
