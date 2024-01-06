import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BananaComponent } from '../banana/banana.component';
import { Banana } from '../banana/banana.types';
import { BananaService } from '../banana.service';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-bananas',
  standalone: true,
  imports: [
    CommonModule,
    BananaComponent,
    HttpClientModule
  ],
  providers: [BananaService],
  template: `
    <section>
      <form class="search-bar">
        <input type="text" placeholder="Search..." #filter (input)="filterResults(filter.value)">
      </form>
    </section>

    <section class="results">
      <app-banana class="banana-result"
      *ngFor="let banana of filteredBananaList"
      [banana]="banana">
      </app-banana>
    </section>
  `,
  styleUrl: './bananas.component.css'
})
export class BananasComponent {
  bananaList: Banana[] = [];
  filteredBananaList: Banana[] = [];

  constructor(private bananaService: BananaService) {
    this.bananaService.getAllBananas().subscribe(results => {
      this.bananaList = results;
      this.filteredBananaList = results;
    })
  }

  filterResults(text: string) {
      if (!text) {
        this.filteredBananaList = this.bananaList;
        return;
      }

      const searchCriteria = text.toLowerCase();

      this.filteredBananaList = this.bananaList.filter(
        banana =>
        banana?.name.toLowerCase().includes(searchCriteria) ||
        banana?.color.toLowerCase().includes(searchCriteria) ||
        banana?.flavor.toLowerCase().includes(searchCriteria)
      );
    }

}
