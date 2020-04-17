import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {path: '',loadChildren:()=> import('../app/features/home/home.module').then(m => m.HomeModule)},
  {path: 'connexion',loadChildren:() => import('../app/features/connexion/connexion.module').then(m => m.ConnexionModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
