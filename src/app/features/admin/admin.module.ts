import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { MenuComponent } from './menu/menu.component';
import { SearchComponent } from './search/search.component';
import { GroupeComponent } from './groupe/groupe.component';
import { RoleComponent } from './role/role.component';
import {ReactiveFormsModule} from '@angular/forms';


@NgModule({
  declarations: [AdminComponent, MenuComponent, SearchComponent, GroupeComponent, RoleComponent],
  imports: [
    CommonModule,
    AdminRoutingModule,
    ReactiveFormsModule
  ]
})
export class AdminModule { }
