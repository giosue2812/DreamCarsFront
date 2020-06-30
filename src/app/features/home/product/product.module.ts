import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductRoutingModule } from './product-routing.module';
import { ListComponent } from './list/list.component';
import {CoreModule} from '../../../core/core.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';


@NgModule({
  declarations: [ListComponent],
  imports: [
    CommonModule,
    ProductRoutingModule,
    CoreModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class ProductModule { }
