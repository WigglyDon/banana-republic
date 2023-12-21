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
      <app-banana-bunch
      *ngFor="let bananaBunch of bananaBunchList"
      [bananaBunch]="bananaBunch">
      </app-banana-bunch>
    </section>
  `,
  styleUrl: './banana.component.css'
})
export class BananaComponent {
  bananaBunchList: BananaBunch[] = mockData;
}

const mockData: BananaBunch[] = [
  {
    id: 0,
    name: 'Normal Banana',
    flavor: 'normal flavour',
    color: 'yellow',
    photo: '../../assets/banana-logo.svg',
    bunchSize: 5,
    edible: true,
    geneticallyAltered: false,
  },
  {
    id: 1,
    name: 'Brown Banana',
    flavor: 'yucky',
    color: 'brown',
    photo: '../../assets/banana-logo.svg',
    bunchSize: 1,
    edible: false,
    geneticallyAltered: false,
  },
  {
    id: 2,
    name: 'Spicy Banana',
    flavor: 'Spicy',
    color: 'red',
    photo: '../../assets/banana-logo.svg',
    bunchSize: 3,
    edible: true,
    geneticallyAltered: true,
  },
  {
    id: 3,
    name: 'Banana Ichiban',
    flavor: 'very weird',
    color: 'brown-ish?',
    photo: '../../assets/banana-logo.svg',
    bunchSize: 1,
    edible: true,
    geneticallyAltered: false,
  },
  {
    id: 4,
    name: 'Jalapeno Banana',
    flavor: 'Spicy',
    color: 'Green',
    photo: '../../assets/banana-logo.svg',
    bunchSize: 4,
    edible: true,
    geneticallyAltered: true,
  },
  {
    id: 5,
    name: 'Super Banana',
    flavor: 'Delicious!',
    color: 'Yellow',
    photo: '../../assets/banana-logo.svg',
    bunchSize: 10,
    edible: true,
    geneticallyAltered: true,
  },
  {
    id: 6,
    name: 'Strawberry Banana',
    flavor: 'Strawberry',
    color: 'Pink',
    photo: '../../assets/banana-logo.svg',
    bunchSize: 1,
    edible: true,
    geneticallyAltered: true,
  },
  {
    id: 7,
    name: 'Space Banana',
    flavor: '???',
    color: 'Black',
    photo: '../../assets/banana-logo.svg',
    bunchSize: 0,
    edible: false,
    geneticallyAltered: true,
  },
  {
    id: 8,
    name: 'Banana Phone',
    flavor: 'none',
    color: 'metallic',
    photo: '../../assets/banana-logo.svg',
    bunchSize: 1,
    edible: false,
    geneticallyAltered: false,
  },
  {
    id: 8,
    name: 'Flying Banana',
    flavor: 'windy',
    color: 'blue + white',
    photo: '../../assets/banana-logo.svg',
    bunchSize: 10,
    edible: false,
    geneticallyAltered: true,
  },
  {
    id: 9,
    name: 'Grape Banana',
    flavor: 'Grape',
    color: 'purple',
    photo: '../../assets/banana-logo.svg',
    bunchSize: 25,
    edible: true,
    geneticallyAltered: true,
  },
  {
    id: 10,
    name: 'Dirty Banana',
    flavor: 'SUPER gross...',
    color: 'Dark Brown',
    photo: '../../assets/banana-logo.svg',
    bunchSize: 2,
    edible: false,
    geneticallyAltered: false,
  },
]
