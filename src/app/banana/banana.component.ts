import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterOutlet } from '@angular/router';
import { Banana } from './banana.types';

@Component({
  selector: 'app-banana',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterOutlet],
  template: `
  <section class="banana" [routerLink]="['/details', banana.id]">
    <img class="banana-photo" [src]="banana.photo" alt="Exterior photo of {{banana.photo}}">
    <h2 class="banana-heading">{{banana.name}}</h2>
    <div class="banana-info">Flavor: {{banana.flavor}}</div>
    <div class="banana-info">Color: {{banana.color}}</div>
    <div class="learn-more">Learn More!</div>
  </section>
  `,
  styleUrl: './banana.component.css'
})
export class BananaComponent {
  @Input() banana!: Banana;
}
