import { Component, OnInit } from '@angular/core';
import {SupplierModel} from '../../../../core/models/SupplierModel';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  supplierModel: SupplierModel[]
  constructor() { }

  ngOnInit(): void {
  }

}
