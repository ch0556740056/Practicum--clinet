import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GuidelinesComponent } from './guidelines/guidelines.component';
import { PersonDetailsComponent } from './person-details/person-details.component';

const routes: Routes = [
  {path:"guidelines",component:GuidelinesComponent},
  {path:"personDetails",component:PersonDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
