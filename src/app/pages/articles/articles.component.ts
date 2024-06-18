import { Component } from '@angular/core';
import {MenuComponent} from "../../components/menu/menu.component";

@Component({
  selector: 'app-articles',
  standalone: true,
    imports: [
        MenuComponent
    ],
  templateUrl: './articles.component.html',
  styleUrl: './articles.component.css'
})
export class ArticlesComponent {

}
