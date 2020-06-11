import { Component, OnInit } from '@angular/core';
import {SessionService} from '../../../core/services/session.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-menu-sales',
  templateUrl: './menu-sales.component.html',
  styleUrls: ['./menu-sales.component.scss']
})
export class MenuSalesComponent implements OnInit {

  /**
   * @type menu: Array
   */
  menu = [
    {
      title:"Inventory",
      links:['sales/product']
    },
    {
      title:"Category",
      links:['sales/category']
    }
  ];

  /**
   * @param sessionService:SessionService
   * @param router:Router
   */
  constructor(public sessionService: SessionService, private router: Router) { }

  ngOnInit(): void {
  }
}
