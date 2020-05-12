import { Component, OnInit } from '@angular/core';
import {SessionService} from '../../../core/services/session.service';

@Component({
  selector: 'app-menu-admin',
  templateUrl: './menu-admin.component.html',
  styleUrls: ['./menu-admin.component.scss']
})
export class MenuAdminComponent implements OnInit {

  constructor(public sessionService: SessionService) { }

  ngOnInit(): void {

  }

}
