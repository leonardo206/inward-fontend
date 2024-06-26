import { Component } from '@angular/core';
import {MenuComponent} from "../../components/menu/menu.component";
import {AboutWelcomeSectionComponent} from "../../components/about-welcome-section/about-welcome-section.component";
import {WhatWeDoSectionComponent} from "../../components/what-we-do-section/what-we-do-section.component";
import {
  OurCapabilitiesSectionComponent
} from "../../components/our-capabilities-section/our-capabilities-section.component";

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [
    MenuComponent,
    AboutWelcomeSectionComponent,
    WhatWeDoSectionComponent,
    OurCapabilitiesSectionComponent
  ],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {

}
