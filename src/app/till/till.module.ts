import { SharedModule } from './../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TillRoutingModule } from './till-routing.module';
import { DepositsComponent } from './deposits/deposits.component';
import { DenominationComponent } from './denominations/denominations.component';
import { AdminDialogComponent } from './admin-dialog/admin-dialog.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    DepositsComponent, 
    DenominationComponent, AdminDialogComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    TillRoutingModule,
    FormsModule,
    ReactiveFormsModule
    
  ],
  entryComponents:[
    DenominationComponent,
    AdminDialogComponent
    
  ]

})
export class TillModule { }
