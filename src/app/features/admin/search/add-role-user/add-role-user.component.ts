import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {RoleModel} from '../../../../core/models/RoleModel';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {UserService} from '../../../../core/services/user.service';
import {RoleService} from '../../../../core/services/role.service';
import {UserRoleService} from '../../../../core/services/user-role.service';
import {UserRoleModel} from '../../../../core/models/UserRoleModel';
import {GroupeModel} from '../../../../core/models/GroupeModel';


@Component({
  selector: 'app-add-role-user',
  templateUrl: './add-role-user.component.html',
  styleUrls: ['./add-role-user.component.scss']
})
export class AddRoleUserComponent implements OnInit {

  /**
   * @type roleModel:RoleModel[]
   */
  roleModel:RoleModel[];
  /**
   * @type userRoleModel: UserRoleModel[]
   */
  userRoleModel:UserRoleModel[];
  /**
   * @type addRoleForm: FormGroup
   */
  addRoleForm:FormGroup;

  /**
   *
   * @param route: ActivatedRoute
   * @param userService: UserService
   * @param roleService: RoleService
   * @param userRoleService: UserRoleService
   * @param formBuilder: FormBuilder
   */
  constructor(
    private route:ActivatedRoute,
    private userService: UserService,
    public roleService: RoleService,
    private userRoleService: UserRoleService,
    private formBuilder:FormBuilder) { }

  /**
   * @description Init form or get a list of roles
   */
  ngOnInit(): void {
    this.roleService.getRoles().subscribe(data => {
      this.roleModel = data;
      this.initForm();
    });
  }

  /**
   * @description to add role from user
   */
  initForm(){
    this.addRoleForm = this.formBuilder.group({
      id_role:new FormControl('',[Validators.required])
    },{
      validators:[this.validForm()]
    })
  }

  /**
   * @return role: FormGroup or return roleAlreadyExist
   * @description to valid form
   */
  validForm(){
    return (role: FormGroup) => {
      const rol = role.get('id_role').value;
      this.userRoleService.getUserRole().subscribe(data =>{
        this.userRoleModel = data;
      });
      if(rol) {
        const userId = parseInt(this.route.snapshot.paramMap.get('user'));
        const find = this.userRoleModel.find(r => r.role == rol && r.end_date == null && r.user == userId) ;
        return !find ? null : {roleAlreadyExist: true}
    }
    }
  }

  /**
   * @description to add role from user
   */
  onSubmitFormRole(){
    this.userService.addRole(this.route.snapshot.paramMap.get('user'),this.addRoleForm.value);
  }
}
