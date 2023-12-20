import { Component } from '@angular/core';
import { BananaComponent } from './banana/banana.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    BananaComponent,
  ],
  template: `
  <main>
    <header class="brand-name">
      <img class="brand-logo" src="/assets/banana-logo.svg"
      alt="logo" aria-hidden="true">
    </header>
    <section class="content">
      <app-banana></app-banana>
    </section>
  </main>
  `,
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'bananas';
}
