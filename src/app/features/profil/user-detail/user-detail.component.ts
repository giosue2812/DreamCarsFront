import { Component, OnInit } from '@angular/core';
import {UserModelArray} from '../../../core/models/UserModelArray';
import {UserService} from '../../../core/services/user.service';
import {UserModelObject} from '../../../core/models/UserModelObject';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.scss']
})
export class UserDetailComponent implements OnInit {

  userModelObject: UserModelObject;

  /**
   *
   * @param userService
   */
  constructor(private userService: UserService) { }

  ngOnInit(): void {
    /**
     * I get the current user id
     */
    this.userService.getIdUser().subscribe(
      data => {
        this.userModelObject = data;
      },
      error => {
        console.log('Erreur : '+error)
      }
    );
  }
}
