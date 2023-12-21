import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BananaLocationComponent } from '../banana-location/banana-location.component';
import { BananaLocation } from '../bananalocation';

@Component({
  selector: 'app-banana',
  standalone: true,
  imports: [
    CommonModule,
    BananaLocationComponent,
  ],
  template: `
    <section>
      <form>
        <input type="text" placeholder="Filter by banana">
        <button class="primary" type="button">Search</button>
      </form>
    </section>

    <section class="results">
      <app-banana-location></app-banana-location>
    </section>
  `,
  styleUrl: './banana.component.css'
})
export class BananaComponent {
  readonly baseUrl = 'https://angular.io/assets/images/tutorials/faa';

  bananaLocation: BananaLocation = {
    id: 9999,
    name: 'Test Nana',
    city: 'Test City',
    state: 'ST',
    photo: `${this.baseUrl}/example-house.jpg`,
    availableUnits: 99,
    wifi: true,
    laundry: false,
  };
}
