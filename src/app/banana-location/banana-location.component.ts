import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BananaLocation } from '../bananalocation';

@Component({
  selector: 'app-banana-location',
  standalone: true,
  imports: [CommonModule],
  template: `
    <p>
      banana-location lols!
    </p>
  `,
  styleUrl: './banana-location.component.css'
})
export class BananaLocationComponent {
  @Input() bananaLocation!: BananaLocation;
}
