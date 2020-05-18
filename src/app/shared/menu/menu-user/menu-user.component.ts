import { Component, OnInit } from '@angular/core';
import {SessionService} from '../../../core/services/session.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-menu-user',
  templateUrl: './menu-user.component.html',
  styleUrls: ['./menu-user.component.scss']
})
export class MenuUserComponent implements OnInit {


  menu = [
    {
      title: "Profil",
      links: ['profil']
    }
  ];

  constructor(public sessionService: SessionService, private router: Router) {
  }

  ngOnInit(): void {
  }

  /**
   * Logout to finish the operation
   */
  logout() {
    this.sessionService.remove();
    return this.sessionService.isAdmin;
  }
}
