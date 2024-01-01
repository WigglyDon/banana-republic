import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { BananaService } from '../banana.service';
import { Banana } from '../banana/banana.types';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  template: `
  <article>
    <img class="banana-photo" [src]="banana?.photo" alt="missing picture"/>
    <section class="banana-description">
      <h2 class="banana-heading">{{banana?.name}}</h2>
      <p class="banana-flavor">{{banana?.flavor}}, {{banana?.color}}</p>
    </section>
    <section class="banana-features">
      <h2 class="section-heading">About this banana</h2>
      <ul>
        <li>Bunch Size: {{banana?.bunchSize}}</li>
        <li>Is this genetically altered: {{banana?.geneticallyAltered}}</li>
        <li>Is this banana edible: {{banana?.edible}}</li>
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
  banana: Banana | undefined;
  infoForm = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    email: new FormControl(''),
  });

  constructor() {
    const bananaId = Number(this.route.snapshot.params['id']);
    this.bananaService.getBananaById(bananaId).then((bananaResult) => {
      this.banana = bananaResult;
    });
  }

  submitInfo() {
    this.bananaService.submitInfo(
      this.infoForm.value.firstName ?? '',
      this.infoForm.value.lastName ?? '',
      this.infoForm.value.email ?? '',
    );
  }
}
