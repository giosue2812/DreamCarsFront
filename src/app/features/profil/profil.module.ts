import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfilRoutingModule } from './profil-routing.module';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { MenuComponent } from './menu/menu.component';
import { UserSetupComponent } from './user-setup/user-setup.component';
import { ProfilComponent } from './profil.component';
import {FormsModule} from '@angular/forms';


@NgModule({
  declarations: [
    UserDetailComponent,
    MenuComponent,
    UserSetupComponent,
    ProfilComponent
  ],
  imports: [
    CommonModule,
    ProfilRoutingModule,
    FormsModule
  ]
})
export class ProfilModule { }
