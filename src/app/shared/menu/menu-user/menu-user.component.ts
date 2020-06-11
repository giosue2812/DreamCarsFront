import { Component, OnInit } from '@angular/core';
import {SessionService} from '../../../core/services/session.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-menu-user',
  templateUrl: './menu-user.component.html',
  styleUrls: ['./menu-user.component.scss']
})
export class MenuUserComponent {

  /**
   * @type menu: Array
   */
  menu = [
    {
      title: "Profil",
      links: ['profil']
    }
  ];

  /**
   * @param sessionService: SessionService
   * @param router: Router
   */
  constructor(public sessionService: SessionService, private router: Router) {
  }

  /**
   * @return sessionService.isAdmin
   * @description Logout from the apps
   */
  logout() {
    this.sessionService.remove();
    return this.sessionService.isAdmin;
  }
}
