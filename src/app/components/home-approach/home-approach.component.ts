import { Component } from '@angular/core';
import {NgForOf, NgIf, NgOptimizedImage} from "@angular/common";
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-home-approach',
  standalone: true,
  imports: [
    NgOptimizedImage,
    NgForOf,
    NgIf
  ],
  templateUrl: './home-approach.component.html',
  styleUrl: './home-approach.component.css',
  animations: [
    trigger('changeCollapse', [
      state('open', style({
        height: '*',
        opacity: 1,
        overflow: 'hidden',
        display: 'block'
      })),
      state('closed', style({
        height: '0px',
        opacity: 0,
        overflow: 'hidden',
        display: 'none'
      })),
      transition('open <=> closed', [
        animate('300ms ease-in-out')
      ])
    ])
  ]
})
export class HomeApproachComponent {
  sections = [
    { title: 'EXPERIMENTATION', imagePath: '/assets/approach-experimentation.svg', content: 'Content of Section EXPERIMENTATION Content of Section EXPERIMENTATIONContent of Section EXPERIMENTATIONContent of Section EXPERIMENTATIONContent of Section EXPERIMENTATIONContent of Section EXPERIMENTATIONContent of Section EXPERIMENTATIONContent of Section EXPERIMENTATIONContent of Section EXPERIMENTATIONContent of Section EXPERIMENTATIONContent of Section EXPERIMENTATIONContent of Section EXPERIMENTATION' },
    { title: 'COLLABORATION', imagePath: '/assets/approach-collaboration.svg', content: 'Content of Section 2' },
    { title: 'IMPLEMENTATION', imagePath: '/assets/approach-implementation.svg', content: 'Content of Section 3' },
    { title: 'TESTING', imagePath: '/assets/approach-testing.svg', content: 'Content of Section 3' }
  ];

  activeSection: number | null = null;

  toggleSection(index: number) {
    if (this.activeSection === index) {
      this.activeSection = null;
    } else {
      this.activeSection = index;
    }
  }
}
