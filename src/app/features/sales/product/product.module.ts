import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductRoutingModule } from './product-routing.module';
import { ListComponent } from './list/list.component';
import {CoreModule} from '../../../core/core.module';
import { EditComponent } from './edit/edit.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { NewComponent } from './new/new.component';
import {SharedModule} from '../../../shared/shared.module';


@NgModule({
  declarations: [ListComponent, EditComponent, NewComponent],
    imports: [
        CommonModule,
        ProductRoutingModule,
        CoreModule,
        ReactiveFormsModule,
        FormsModule,
        SharedModule
    ]
})
export class ProductModule { }
