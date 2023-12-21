import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BananaBunch } from '../bananabunch';

@Component({
  selector: 'app-banana-bunch',
  standalone: true,
  imports: [CommonModule],
  template: `
  <section class="listing">
    <img class="listing-photo" [src]="bananaBunch.photo" alt="Exterior photo of {{bananaBunch.photo}}">
    <h2 class="listing-heading">{{bananaBunch.name}}</h2>
    <p class="banana-bunch">{{bananaBunch.color}}, {{bananaBunch.flavor}}</p>
  </section>
  `,
  styleUrl: './banana-bunch.component.css'
})
export class BananaBunchComponent {
  @Input() bananaBunch!: BananaBunch;
}
