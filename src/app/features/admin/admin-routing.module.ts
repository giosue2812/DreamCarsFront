import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AdminComponent} from './admin.component';
import {IsAdminGuard} from '../../core/guards/is-admin.guard';
import {SearchComponent} from './search/search.component';
import {GroupeComponent} from './groupe/groupe.component';
import {RoleComponent} from './role/role.component';
import {SearchFormComponent} from './search/search-form/search-form.component';
import {SearchResultComponent} from './search/search-result/search-result.component';
import {UserSearch} from '../../core/resolvers/user-search';
import {Groupes} from '../../core/resolvers/groupes';
import {AddGroupeUserComponent} from './search/add-groupe-user/add-groupe-user.component';
import {AddRoleUserComponent} from './search/add-role-user/add-role-user.component';
import {Roles} from '../../core/resolvers/roles';


const routes: Routes = [

  /**
   * This route is only for Role Admin
   */
  {path:'',component:AdminComponent,canActivate:[IsAdminGuard],children:[
      {path:'search',component:SearchComponent,children:[
          {path:'',component:SearchFormComponent},
          {path:'result/:keyWord',component:SearchResultComponent,resolve:{userFound:UserSearch},children:[
              {path:'addGroupe/:user',component: AddGroupeUserComponent,resolve:{groupeAll:Groupes}},
              {path:'addRole/:user', component: AddRoleUserComponent,resolve:{roleAll:Roles}}
            ]},
        ]},
      {path:'groupe',component: GroupeComponent},
      {path:'role',component: RoleComponent}
    ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
