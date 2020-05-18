import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { MenuComponent } from './menu/menu.component';
import { SearchComponent } from './search/search.component';
import { GroupeComponent } from './groupe/groupe.component';
import { RoleComponent } from './role/role.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { SearchFormComponent } from './search/search-form/search-form.component';
import { SearchResultComponent } from './search/search-result/search-result.component';
import { AddGroupeUserComponent } from './search/add-groupe-user/add-groupe-user.component';
import { AddRoleUserComponent } from './search/add-role-user/add-role-user.component';
import {CoreModule} from '../../core/core.module';
import {NgxUpperCaseDirectiveModule} from 'ngx-upper-case-directive';
import { NewRoleComponent } from './role/new-role/new-role.component';


@NgModule({
  declarations: [
    AdminComponent,
    MenuComponent,
    SearchComponent,
    GroupeComponent,
    RoleComponent,
    SearchFormComponent,
    SearchResultComponent,
    AddGroupeUserComponent,
    AddRoleUserComponent,
    NewRoleComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    CoreModule,
    NgxUpperCaseDirectiveModule
  ]
})
export class AdminModule { }
