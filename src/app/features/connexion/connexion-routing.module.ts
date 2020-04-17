import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {FormLoginComponent} from './form-login/form-login.component';
import {FormInscriptionComponent} from './form-inscription/form-inscription.component';


const routes: Routes = [
  {path:'', component:FormLoginComponent},
  {path:'inscription',component: FormInscriptionComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ConnexionRoutingModule { }
