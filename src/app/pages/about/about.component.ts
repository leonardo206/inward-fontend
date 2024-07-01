import { Component } from '@angular/core';
import {MenuComponent} from "../../components/menu/menu.component";
import {AboutWelcomeSectionComponent} from "../../components/about-welcome-section/about-welcome-section.component";

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [
    MenuComponent,
    AboutWelcomeSectionComponent
  ],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {

}
