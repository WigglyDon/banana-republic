import { Routes } from "@angular/router";
import { BananasComponent } from "./bananas/bananas.component";
import { DetailsComponent } from "./details/details.component";

const routeConfig: Routes = [
  {
    path: '',
    component: BananasComponent,
    title: 'Banana Republic',
  },
  {
    path: 'details/:id',
    component: DetailsComponent,
    title: 'Banana Details',
  }
];


export default routeConfig;
