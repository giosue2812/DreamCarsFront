import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './menu/menu.component';
import {RouterModule} from '@angular/router';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { MenuAdminComponent } from './menu/menu-admin/menu-admin.component';
import { MenuUserComponent } from './menu/menu-user/menu-user.component';
import { MenuSalesComponent } from './menu/menu-sales/menu-sales.component';


@NgModule({
  declarations: [MenuComponent, MenuAdminComponent, MenuUserComponent, MenuSalesComponent],
  exports: [
    MenuComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    BrowserAnimationsModule,
  ]
})
export class SharedModule { }
