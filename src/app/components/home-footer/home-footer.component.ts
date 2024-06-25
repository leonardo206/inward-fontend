import { Component } from '@angular/core';

@Component({
  selector: 'app-home-footer',
  standalone: true,
  imports: [],
  templateUrl: './home-footer.component.html',
  styleUrl: './home-footer.component.css'
})
export class HomeFooterComponent {
  scrollToTop(): void {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}
