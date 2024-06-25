import { Component } from '@angular/core';
import {NgForOf, NgIf, NgOptimizedImage, NgStyle} from "@angular/common";

interface Project {
  key: string;
  text: string;
  imagePath: string;
  tags: string[];
}


@Component({
  selector: 'app-home-latest-projects',
  standalone: true,
  imports: [
    NgOptimizedImage,
    NgForOf,
    NgIf,
    NgStyle
  ],
  templateUrl: './home-latest-projects.component.html',
  styleUrl: './home-latest-projects.component.css'
})


export class HomeLatestProjectsComponent {
  projects: Project[] = [];

  ngOnInit() {
    this.projects = [
      {
        key: "1",
        text: "BUCCE",
        imagePath: "/assets/latest-projects-project.png",
        tags: [
          "WEB 4.0",
          "WEB 4.0"
        ]
      },
      {
        key: "2",
        text: "BUCCE",
        imagePath: "/assets/latest-projects-project.png",
        tags: [
          "WEB 4.0",
          "WEB 4.0"
        ]
      },
      {
        key: "3",
        text: "BUCCE",
        imagePath: "/assets/latest-projects-project.png",
        tags: [
          "WEB 4.0",
          "WEB 4.0"
        ]
      }
    ];
  }

}
