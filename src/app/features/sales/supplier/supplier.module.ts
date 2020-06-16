import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SupplierRoutingModule } from './supplier-routing.module';
import { ListComponent } from './list/list.component';
import { EditComponent } from './edit/edit.component';
import {ReactiveFormsModule} from '@angular/forms';
import { NewComponent } from './new/new.component';


@NgModule({
  declarations: [ListComponent, EditComponent, NewComponent],
    imports: [
        CommonModule,
        SupplierRoutingModule,
        ReactiveFormsModule
    ]
})
export class SupplierModule { }
