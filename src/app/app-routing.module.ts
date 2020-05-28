import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {path: 'home',loadChildren:()=> import('../app/features/home/home.module').then(m => m.HomeModule)},
  {path: 'connexion',loadChildren:() => import('../app/features/connexion/connexion.module').then(m => m.ConnexionModule)},
  {path: 'profil',loadChildren:() => import('../app/features/profil/profil.module').then(m => m.ProfilModule)},
  {path: 'admin',loadChildren:()=> import('../app/features/admin/admin.module').then(m => m.AdminModule)},
  {path: 'sales',loadChildren:()=> import('../app/features/sales/sales.module').then(m => m.SalesModule)},
  {path: '**',redirectTo:'home',pathMatch:'full'},
  {path: '',redirectTo:'home',pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
