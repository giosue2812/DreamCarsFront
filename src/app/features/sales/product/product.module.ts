import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductRoutingModule } from './product-routing.module';
import { ListComponent } from './list/list.component';
import {CoreModule} from '../../../core/core.module';
import { EditComponent } from './edit/edit.component';
import {ReactiveFormsModule} from '@angular/forms';


@NgModule({
  declarations: [ListComponent, EditComponent],
  imports: [
    CommonModule,
    ProductRoutingModule,
    CoreModule,
    ReactiveFormsModule
  ]
})
export class ProductModule { }
