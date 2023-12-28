import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { BananaService } from '../banana.service';
import { BananaBunch } from '../bananabunch';

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [CommonModule],
  template: `
  <article>
    <img class="banana-photo" [src]="bananaBunch?.photo" alt="missing picture"/>
    <section class="banana-description">
      <h2 class="banana-heading">{{bananaBunch?.name}}</h2>
      <p class="banana-flavor">{{bananaBunch?.flavor}}, {{bananaBunch?.color}}</p>
    </section>
    <section class="banana-features">
      <h2 class="section-heading">About this banana</h2>
      <ul>
        <li>Bunch Size: {{bananaBunch?.bunchSize}}</li>
        <li>Is this genetically altered: {{bananaBunch?.geneticallyAltered}}</li>
        <li>Is this banana edible: {{bananaBunch?.edible}}</li>
      </ul>
    </section>
  </article>
  `,
  styleUrl: './details.component.css'
})

export class DetailsComponent {
  route: ActivatedRoute = inject(ActivatedRoute);
  bananaService = inject(BananaService);
  bananaBunch: BananaBunch | undefined;

  constructor() {
    const bananaBunchId = Number(this.route.snapshot.params['id']);
    this.bananaBunch = this.bananaService.getBananaBunchById(bananaBunchId);
  }
}
