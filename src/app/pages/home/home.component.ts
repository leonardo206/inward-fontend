import { Component } from '@angular/core';
import {MenuComponent} from "../../components/menu/menu.component";
import {NgOptimizedImage} from "@angular/common";
import {CardSliderComponent} from "../../card-slider/card-slider.component";
import {HorizontalScrollComponent} from "../../components/horizontal-scroll/horizontal-scroll.component";
import {HeaderComponent} from "../../components/header/header.component";
import {VideoSliderComponent} from "../../components/video-slider/video-slider.component";
import {HomeFooterComponent} from "../../components/home-footer/home-footer.component";
import {TestimonialsSectionComponent} from "../../components/testimonials-section/testimonials-section.component";
import {HomeStrategiesComponent} from "../../components/home-strategies/home-strategies.component";
import {HomeApproachComponent} from "../../components/home-approach/home-approach.component";
import {HomeLatestProjectsComponent} from "../../components/home-latest-projects/home-latest-projects.component";
import {CollapsibleComponent} from "../../components/collapsible/collapsible.component";
import {CtaSliderComponent} from "../../components/cta-slider/cta-slider.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    MenuComponent,
    NgOptimizedImage,
    CardSliderComponent,
    HorizontalScrollComponent,
    HeaderComponent,
    VideoSliderComponent,
    HomeFooterComponent,
    HomeStrategiesComponent,
    HomeApproachComponent,
    HomeLatestProjectsComponent,
    HomeFooterComponent,
    TestimonialsSectionComponent,
    HomeLatestProjectsComponent,
    CollapsibleComponent,
    CtaSliderComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
