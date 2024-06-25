import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import {MenuComponent} from "./components/menu/menu.component";
import {HomeFooterComponent} from "./components/home-footer/home-footer.component";
import {CtaSliderComponent} from "./components/cta-slider/cta-slider.component";

@Component({
  selector: 'app-root',
  standalone: true,
    imports: [RouterModule, MenuComponent, HomeFooterComponent, CtaSliderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'inward-frontend';
}
