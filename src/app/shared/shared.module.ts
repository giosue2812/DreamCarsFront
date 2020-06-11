import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './menu/menu.component';
import {RouterModule} from '@angular/router';
import { MenuAdminComponent } from './menu/menu-admin/menu-admin.component';
import { MenuUserComponent } from './menu/menu-user/menu-user.component';
import { MenuSalesComponent } from './menu/menu-sales/menu-sales.component';
import {ToastrModule} from 'ngx-toastr';
import {NgxSpinnerModule} from 'ngx-spinner';


@NgModule({
  declarations: [MenuComponent, MenuAdminComponent, MenuUserComponent, MenuSalesComponent],
  exports: [
    MenuComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    ToastrModule.forRoot(),
    NgxSpinnerModule
  ]
})
export class SharedModule { }
