import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BananaLocation } from '../bananalocation';

@Component({
  selector: 'app-banana-location',
  standalone: true,
  imports: [CommonModule],
  template: `
  <section class="listing">
    <img class="listing-photo" [src]="bananaLocation.photo" alt="Exterior photo of {{bananaLocation.photo}}">
    <h2 class="listing-heading">{{bananaLocation.name}}</h2>
    <p class="banana-location">{{bananaLocation.city}}, {{bananaLocation.state}}</p>
  </section>
  `,
  styleUrl: './banana-location.component.css'
})
export class BananaLocationComponent {
  @Input() bananaLocation!: BananaLocation;
}
