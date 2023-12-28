import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { BananaService } from '../banana.service';
import { BananaBunch } from '../bananabunch';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
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

    <section class="banana-info">
      <h2 class="section-heading">Input new nana info</h2>
      <form [formGroup]="infoForm" (submit)="submitInfo()">
        <label for="first-name">First Name</label>
        <input id="first-name" type="text" formControlName="firstName">

        <label for="last-name">Last Name</label>
        <input id="last-name" type="text" formControlName="lastName">

        <label for="email">Email</label>
        <input id="email" type="email" formControlName="email">
        <button type="submit" class="primary">Apply now</button>
      </form>
    </section>
  </article>
  `,
  styleUrl: './details.component.css'
})

export class DetailsComponent {
  route: ActivatedRoute = inject(ActivatedRoute);
  bananaService = inject(BananaService);
  bananaBunch: BananaBunch | undefined;
  infoForm = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    email: new FormControl(''),
  });

  constructor() {
    const bananaBunchId = Number(this.route.snapshot.params['id']);
    this.bananaBunch = this.bananaService.getBananaBunchById(bananaBunchId);
  }

  submitInfo() {
    this.bananaService.submitInfo(
      this.infoForm.value.firstName ?? '',
      this.infoForm.value.lastName ?? '',
      this.infoForm.value.email ?? '',
    );
  }
}
