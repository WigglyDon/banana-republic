import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BananaBunchComponent } from '../banana-bunch/banana-bunch.component';
import { BananaBunch } from '../bananabunch';
import { BananaService } from '../banana.service';

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
  bananaBunchList: BananaBunch[] = [];
  bananaService: BananaService = inject(BananaService);

  constructor() {
    this.bananaBunchList = this.bananaService.getAllBananaBunches();
  }
}
