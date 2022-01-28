import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ShipDetailsComponent } from './ship-details/ship-details.component';


const routes: Routes = [
  {path:'shipDetails',component:ShipDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
