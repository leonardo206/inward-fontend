import { Component } from '@angular/core';
import {MenuComponent} from "../../components/menu/menu.component";
import {HomeFooterComponent} from "../../components/home-footer/home-footer.component";

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [
    MenuComponent,
    HomeFooterComponent
  ],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {

}
