import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BananaBunchComponent } from '../banana-bunch/banana-bunch.component';
import { BananaBunch } from '../bananabunch';

@Component({
  selector: 'app-banana',
  standalone: true,
  imports: [
    CommonModule,
    BananaBunchComponent,
  ],
  template: `
    <section>
      <form>
        <input type="text" placeholder="Filter by banana">
        <button class="primary" type="button">Search</button>
      </form>
    </section>

    <section class="results">
      <app-banana-bunch [bananaBunch]="bananaBunch"></app-banana-bunch>
    </section>
  `,
  styleUrl: './banana.component.css'
})
export class BananaComponent {
  bananaBunch: BananaBunch = {
    id: 9999,
    name: 'Test Nana',
    flavor: 'banana flavor',
    color: 'yellow',
    photo: `../../assets/banana-logo.svg`,
    bunchSize: 99,
    edible: false,
    geneticallyAltered: false,
  };
}
