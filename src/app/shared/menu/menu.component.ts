import { Component, OnInit } from '@angular/core';
import {SessionService} from '../../core/services/session.service';
import {Router} from '@angular/router';
import {UserModel} from '../../core/models/UserModel';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  user : UserModel;

  menu = [
    {
      title: "Profil",
      links: ['profil']
    }
  ];

  constructor(private sessionService: SessionService, private router: Router) { }

  ngOnInit(): void {
  }

  /**
   * Check if user is logged
   */
  islog(){
   return this.sessionService.isLogged;
  }

  /**
   * For some route admi is required
   */
  isAdmin(){
    return this.sessionService.isAdmin;
  }
  /**
   * Logout to finish the operation
   */
  logout(){
    this.sessionService.remove();
    return this.router.navigateByUrl('connexion');
  }
}

