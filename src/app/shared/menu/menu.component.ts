import { Component, OnInit } from '@angular/core';
import {SessionService} from '../../core/services/connexion/session.service';
import {Router} from '@angular/router';
import {UserService} from '../../core/services/connexion/user.service';
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

  constructor(private sessionService: SessionService, private router: Router, private userService:UserService) { }

  ngOnInit(): void {
  }

  /**
   * Check if user is logged
   */
  islog(){
   return this.sessionService.isLogged;
  }

  /**
   * Logout to finish the operation
   */
  logout(){
    this.sessionService.remove();
    return this.router.navigateByUrl('connexion');
  }
}

