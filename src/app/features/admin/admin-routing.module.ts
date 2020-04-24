import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AdminComponent} from './admin.component';
import {IsAdminGuard} from '../../core/guards/is-admin.guard';
import {SearchComponent} from './search/search.component';
import {GroupeComponent} from './groupe/groupe.component';
import {RoleComponent} from './role/role.component';


const routes: Routes = [
  {path:'',component:AdminComponent,canActivate:[IsAdminGuard],children:[
      {path:'search',component:SearchComponent},
      {path:'groupe',component: GroupeComponent},
      {path:'role',component: RoleComponent}
    ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
