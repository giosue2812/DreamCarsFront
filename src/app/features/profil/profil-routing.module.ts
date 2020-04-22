import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ProfilComponent} from './profil.component';
import {UserDetailComponent} from './user-detail/user-detail.component';
import {UserSetupComponent} from './user-setup/user-setup.component';


const routes: Routes = [
  {path: '',component: ProfilComponent,children:[
      {path: 'profil',component: UserDetailComponent},
      {path: 'setup',component: UserSetupComponent}
    ]},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProfilRoutingModule { }
