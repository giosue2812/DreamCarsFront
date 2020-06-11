import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import {UserService} from '../../../core/services/user.service';
import {UserModel} from '../../../core/models/UserModel';

@Component({
  selector: 'app-user-setup',
  templateUrl: './user-setup.component.html',
  styleUrls: ['./user-setup.component.scss']
})
export class UserSetupComponent implements OnInit {

  /**
   * @type userModel: UserModel[]
   */
  userModel: UserModel[];

  /**
   * @param userService: UserService
   */
  constructor(public userService: UserService) { }

  /**
   * @description User id
   */
  ngOnInit(): void {
    this.userService.getIdUser().subscribe(
      (data) => {
        this.userModel = data
      }
    )
  }

  /**
   * @param form: NgForm
   * @description Update user
   */
  onSubmitForm(form:NgForm){
    this.userService.updateUser(form.value);
   }
}
