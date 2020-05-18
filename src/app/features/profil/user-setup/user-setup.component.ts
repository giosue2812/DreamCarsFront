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

  userModel: UserModel;

  /**
   *
   * @param userService
   */
  constructor(private userService: UserService) { }

  /**
   * I get a id user and. We call a service updateUser
   */
  ngOnInit(): void {
    this.userService.getIdUser().subscribe(
      (data) => {
        this.userModel = data
      },
      error => {
        console.log('Erreur : '+Error)
      }
    )
  }

  /**
   * @param form
   */
  onSubmitForm(form: NgForm){
    return this.userService.updateUser(form.value);
   }

}
