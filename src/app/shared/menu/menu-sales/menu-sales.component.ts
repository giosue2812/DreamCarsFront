import { Component, OnInit } from '@angular/core';
import {SessionService} from '../../../core/services/session.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-menu-sales',
  templateUrl: './menu-sales.component.html',
  styleUrls: ['./menu-sales.component.scss']
})
export class MenuSalesComponent implements OnInit {

  menu = [
    {
      title:"Inventory",
      links:['sales/product']
    }
  ];

  constructor(public sessionService: SessionService, private router: Router) { }

  ngOnInit(): void {
  }
}
