import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BananaBunchComponent } from '../banana-bunch/banana-bunch.component';
import { BananaBunch } from '../banana-bunch/banana-bunch.types';
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
        <input type="text" placeholder="Filter by banana" #filter (input)="filterResults(filter.value)">
      </form>
    </section>

    <section class="results">
      <app-banana-bunch
      *ngFor="let bananaBunch of filteredBananaBunchList"
      [bananaBunch]="bananaBunch">
      </app-banana-bunch>
    </section>
  `,
  styleUrl: './bananas.component.css'
})
export class BananasComponent {
  bananaBunchList: BananaBunch[] = [];
  bananaService: BananaService = inject(BananaService);
  filteredBananaBunchList: BananaBunch[] = [];

  constructor() {

    this.bananaService.getAllBananaBunches().then((bananaBunchResults: BananaBunch[]) => {
      this.bananaBunchList = bananaBunchResults;
      this.filteredBananaBunchList = bananaBunchResults;
    });
  }

  filterResults(text: string) {
      if (!text) {
        this.filteredBananaBunchList = this.bananaBunchList;
        return;
      }

      this.filteredBananaBunchList = this.bananaBunchList.filter(
        bananaBunch => bananaBunch?.name.toLowerCase().includes(text.toLowerCase())
      );
    }

}
