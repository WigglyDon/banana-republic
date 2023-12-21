import { Routes } from "@angular/router";
import { BananaComponent } from "./banana/banana.component";
import { DetailsComponent } from "./details/details.component";

const routeConfig: Routes = [
  {
    path: '',
    component: BananaComponent,
    title: 'Home page',
  },
  {
    path: 'details/:id',
    component: DetailsComponent,
    title: 'Home details',
  }
];


export default routeConfig;
