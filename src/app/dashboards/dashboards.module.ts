import { SharedModule } from './../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChartsModule } from 'ng2-charts';

import { DashboardsRoutingModule } from './dashboards-routing.module';
import { DashboardSummaryComponent } from './dashboard-summary/dashboard-summary.component';


@NgModule({
  declarations: [DashboardSummaryComponent],
  imports: [
    CommonModule,
    SharedModule,
    ChartsModule,
    DashboardsRoutingModule
  ]
})
export class DashboardsModule { }
