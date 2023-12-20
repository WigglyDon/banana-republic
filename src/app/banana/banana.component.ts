import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-banana',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section>
      <form>
        <input type="text" placeholder="Filter by banana">
        <button class="primary" type="button">Search</button>
      </form>
    </section>
  `,
  styleUrl: './banana.component.css'
})
export class BananaComponent {

}
