import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ListComponent} from './list/list.component';
import {EditComponent} from './edit/edit.component';


const routes: Routes = [
  {path:'',component:ListComponent},
  {path:'edit/:categoryId',component:EditComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CategoryRoutingModule { }
