import { Component, OnInit } from '@angular/core';
import {UserModel} from '../../../core/models/UserModel';
import {UserService} from '../../../core/services/connexion/user.service';
import {BaseModel} from '../../../core/models/BaseModel';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.scss']
})
export class UserDetailComponent implements OnInit {
  baseModel: BaseModel;
  userModel: UserModel;

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    /**
     * I get the current user id
     */
    this.userService.getIdUser().subscribe(
      data => {
        this.userModel = data;
        console.log(this.userModel);
      },
      error => {
        console.log('Erreur : '+error)
      }
    );
  }

}
