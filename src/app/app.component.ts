import { Component } from '@angular/core';
import { BananasComponent } from './bananas/bananas.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    BananasComponent,
    RouterModule,
  ],
  template: `
  <main>
    <a [routerLink]="['/']">
      <header class="brand-name">
        <img class="brand-logo" src="/assets/banana-logo.svg" alt="logo" aria-hidden="true">
        <h2>BANANA REPUBLIC</h2>
      </header>
    </a>
    <section class="content">
      <router-outlet></router-outlet>
    </section>
  </main>
  `,
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Banana Republic';
}
