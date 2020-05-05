import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {RoleModel} from '../../../../core/models/RoleModel';
import {NgForm} from '@angular/forms';
import {UserService} from '../../../../core/services/user.service';

@Component({
  selector: 'app-add-role-user',
  templateUrl: './add-role-user.component.html',
  styleUrls: ['./add-role-user.component.scss']
})
export class AddRoleUserComponent implements OnInit {
  /**
   * A variable roleModel is to get a value from form
   */
  roleModel:RoleModel;
  /**
   * A variable to get all groups in a array
   */
  roleModelChoice:RoleModel[];

  constructor(private route:ActivatedRoute, private userService: UserService) { }

  /**
   * This subscribe get a parms from route "rolleAll" and push into roleModelChoice
   */
  ngOnInit(): void {
    this.route.data.subscribe((data:{roleAll:RoleModel[]})=> this.roleModelChoice = data.roleAll)
  }

  /**
   * @param form
   */
  onSubmitFormRole(form:NgForm){
    this.userService.addRole(this.route.snapshot.paramMap.get('user'),form.value);
  }
}
