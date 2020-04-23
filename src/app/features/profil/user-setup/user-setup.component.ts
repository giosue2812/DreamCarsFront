import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import {UserService} from '../../../core/services/connexion/user.service';
import {UserModel} from '../../../core/models/UserModel';

@Component({
  selector: 'app-user-setup',
  templateUrl: './user-setup.component.html',
  styleUrls: ['./user-setup.component.scss']
})
export class UserSetupComponent implements OnInit {


  userModel: UserModel;

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.userService.getIdUser().subscribe(
      data => {
        this.userModel = data
      },
      error => {
        console.log('Erreur : '+Error)
      }
    )
  }

  onSubmitForm(form: NgForm){
    return this.userService.updateUser(form.value);
   }

}
