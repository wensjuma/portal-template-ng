import { DepositsComponent } from './deposits/deposits.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
 {
   path:'deposit',
   component: DepositsComponent
 } 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TillRoutingModule { }
