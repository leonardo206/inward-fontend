import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import {MenuComponent} from "./components/menu/menu.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterModule, MenuComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'inward-frontend';
}
