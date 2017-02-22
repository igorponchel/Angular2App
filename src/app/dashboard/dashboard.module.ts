import { NgModule } from '@angular/core';
import { ChartsModule } from 'ng2-charts/ng2-charts';

import { DashboardComponent, DashboardRoutingModule } from './index';

@NgModule({
  imports: [
    DashboardRoutingModule,
    ChartsModule
  ],
  declarations: [ DashboardComponent ]
})
export class DashboardModule { }
