import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TransactionsComponent } from './transactions/transactions.component';


const routes: Routes = [
  {
    path:'list',
    component: TransactionsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TransactionsRoutingModule { }
