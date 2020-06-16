import { Component, OnInit } from '@angular/core';
import {SupplierModel} from '../../../../core/models/SupplierModel';
import {CategoryService} from '../../../../core/services/category.service';
import {SupplierService} from '../../../../core/services/supplier.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  /**
   * @type supplierModel: SupplierModel
   */
  supplierModel: SupplierModel[];

  /**
   * @param supplierService: SupplierService
   */
  constructor(private supplierService: SupplierService) { }

  /**
   * @description Get les of suppliers
   */
  ngOnInit(): void {
    this.supplierService.getSuppliers().subscribe(
      data => {
        this.supplierModel = data
      });
  }

  /**
   * @param supplierId: Number
   * @description Remove supplier
   */
  onRemove(supplierId){
    this.supplierService.removeSupplier(supplierId).subscribe(
      data => {
        this.supplierModel = data;
      })
  }
}
