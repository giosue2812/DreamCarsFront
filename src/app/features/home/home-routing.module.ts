import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {IsLoggedGuard} from '../../core/guards/is-logged.guard';
import {HomeComponent} from './home.component';


const routes: Routes = [
  /**
   * This route is only if the user is logged
   */
  {path: '',component:HomeComponent,children:[
      {path:'',loadChildren:()=>import('./product/product.module').then(m => m.ProductModule)}
    ]},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
