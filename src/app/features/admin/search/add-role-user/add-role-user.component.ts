import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {RoleModel} from '../../../../core/models/RoleModel';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {UserService} from '../../../../core/services/user.service';
import {RoleService} from '../../../../core/services/role.service';
import {UserRoleService} from '../../../../core/services/user-role.service';
import {UserRoleModel} from '../../../../core/models/UserRoleModel';


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
  userRoleModel:UserRoleModel;
  addRoleForm:FormGroup;

  /**
   *
   * @param route
   * @param userService
   * @param roleService
   * @param userRoleService
   * @param formBuilder
   */
  constructor(
    private route:ActivatedRoute,
    private userService: UserService,
    public roleService: RoleService,
    private userRoleService: UserRoleService,
    private formBuilder:FormBuilder) { }

  /**
   * This subscribe get a parms from route "rolleAll" and push into roleModelChoice
   */
  ngOnInit(): void {
    this.roleService.getRoles().subscribe(data => {
      this.roleModel = data;
      this.initForm();
    });
  }

  initForm(){
    this.addRoleForm = this.formBuilder.group({
      id_role:new FormControl('',[Validators.required])
    },{
      validators:[this.validForm()]
    })
  }

  validForm(){
    return (role: FormGroup) => {
      const rol = role.get('id_role').value;
      this.userRoleService.getUserRole().subscribe(data =>{
        this.userRoleModel = data;
      });
      if(rol) {
        const find = this.userRoleModel.data.role == rol;
        return !find ? null : {roleAlreadyExist: true}
      }
    }
  }

  onSubmitFormRole(){
    this.userService.addRole(this.route.snapshot.paramMap.get('user'),this.addRoleForm.value);
  }
}
