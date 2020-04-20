import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './home.component';
import {IsLoggedGuard} from '../../core/guards/is-logged.guard';


const routes: Routes = [
  {path:'home',component:HomeComponent,canActivate:[IsLoggedGuard]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
