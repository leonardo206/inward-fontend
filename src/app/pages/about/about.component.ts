import { Component } from '@angular/core';
import {MenuComponent} from "../../components/menu/menu.component";

@Component({
  selector: 'app-about',
  standalone: true,
    imports: [
        MenuComponent
    ],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {

}
