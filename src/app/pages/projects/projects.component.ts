import { Component } from '@angular/core';
import {MenuComponent} from "../../components/menu/menu.component";

@Component({
  selector: 'app-projects',
  standalone: true,
    imports: [
        MenuComponent
    ],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css'
})
export class ProjectsComponent {

}
