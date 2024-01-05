import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { BananaService } from '../banana.service';
import { Banana } from '../banana/banana.types';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, HttpClientModule],
  providers: [BananaService],
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

    <!--  -->
    <div>--------------------------------------</div>
    <!--  -->

    <section class="banana-info">
      <h2 class="section-heading">Edit Banana</h2>
      <form *ngIf="infoForm" [formGroup]="infoForm" (submit)="updateBanana()">

        <label for="name">Name</label>
        <input id="name" type="text" formControlName="name">

        <label for="flavor">Flavor</label>
        <input id="flavor" type="text" formControlName="flavor">

        <label for="color">Color</label>
        <input id="color" type="text" formControlName="color">

        <label for="bunchSize">Bunch Size</label>
        <input id="bunchSize" type="text" formControlName="bunchSize">

        <label for="edible">Edible?</label>
        <input id="edible" type="text" formControlName="edible">

        <label for="geneticallyAltered">Genetically Altered?</label>
        <input id="geneticallyAltered" type="text" formControlName="geneticallyAltered">

        <button type="submit" class="primary">Submit</button>
      </form>
    </section>
  </article>
  `,
  styleUrl: './details.component.css'
})

export class DetailsComponent {
  route: ActivatedRoute = inject(ActivatedRoute);
  bananaService = inject(BananaService);
  banana?: Banana;
  infoForm!: FormGroup;

  constructor() {
    this.initForm();
    const bananaId = Number(this.route.snapshot.params['id']);
    this.bananaService.getBananaById(bananaId).subscribe(result => {
      this.banana = result;
      this.setFormValues();
    },
    error => console.error('error!:', error)
    );
  }

  initForm() {
    this.infoForm = new FormGroup({
      name: new FormControl(''),
      flavor: new FormControl(''),
      color: new FormControl(''),
      bunchSize: new FormControl(''),
      edible: new FormControl(''),
      geneticallyAltered: new FormControl(''),
    });
  }

  setFormValues() {
    this.infoForm.patchValue({
      name: this.banana?.name,
      flavor: this.banana?.flavor,
      color: this.banana?.color,
      bunchSize: this.banana?.bunchSize,
      edible: this.banana?.edible,
      geneticallyAltered: this.banana?.geneticallyAltered,
    })
  }

  updateBanana() {
    this.bananaService.updateBanana(this.banana!.id, this.infoForm.value).subscribe(updatedBanana => {
      this.banana = updatedBanana;
      this.setFormValues();
    });
  }
}
