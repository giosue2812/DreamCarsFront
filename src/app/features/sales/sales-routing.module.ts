import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {SummaryOrderComponent} from './summary-order/summary-order.component';


const routes: Routes = [
  {path:'product',loadChildren:()=>import('../sales/product/product.module').then(m => m.ProductModule)},
  {path:'category',loadChildren:()=>import('../sales/category/category.module').then(m => m.CategoryModule)},
  {path:'supplier',loadChildren:()=>import ('../sales/supplier/supplier.module').then(m => m.SupplierModule)},
  {path:'summaryOrder',component:SummaryOrderComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SalesRoutingModule { }
