import { Component, OnInit } from '@angular/core';
import {UserService} from '../../../core/services/user.service';
import {UserModel} from '../../../core/models/UserModel';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.scss']
})
export class UserDetailComponent implements OnInit {

  /**
   * @type userModel:UserModel[]
   */
  userModel: UserModel[];

  /**
   * @param userService: UserService
   */
  constructor(public userService: UserService) { }

  /**
   * @description Get a user id
   */
  ngOnInit(): void {
    this.userService.getIdUser().subscribe(
      data => {
        this.userModel = data;
      });
  }
}
