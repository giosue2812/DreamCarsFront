import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SalesRoutingModule } from './sales-routing.module';
import { SummaryOrderComponent } from './summary-order/summary-order.component';

@NgModule({
  declarations: [SummaryOrderComponent],
  imports: [
    CommonModule,
    SalesRoutingModule
  ]
})
export class SalesModule { }
