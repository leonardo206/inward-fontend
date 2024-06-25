import { Component } from '@angular/core';
import {NgForOf, NgIf} from "@angular/common";

@Component({
  selector: 'app-collapsible',
  templateUrl: './collapsible.component.html',
  standalone: true,
  imports: [
    NgIf,
    NgForOf
  ],
  styleUrls: ['./collapsible.component.css']
})
export class CollapsibleComponent {
  sections = [
    { title: 'Section 1', content: 'Content of Section 1' },
    { title: 'Section 2', content: 'Content of Section 2' },
    { title: 'Section 3', content: 'Content of Section 3' }
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
