import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BananaBunch } from '../bananabunch';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-banana-bunch',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterOutlet],
  template: `
  <section class="listing" [routerLink]="['/details', bananaBunch.id]">
    <img class="listing-photo" [src]="bananaBunch.photo" alt="Exterior photo of {{bananaBunch.photo}}">
    <h2 class="listing-heading">{{bananaBunch.name}}</h2>
    <p class="banana-bunch">{{bananaBunch.color}}, {{bananaBunch.flavor}}</p>
    <a>Learn More!</a>
  </section>
  `,
  styleUrl: './banana-bunch.component.css'
})
export class BananaBunchComponent {
  @Input() bananaBunch!: BananaBunch;
}
