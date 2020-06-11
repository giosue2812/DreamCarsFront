import {Component, Input, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {RoleModel} from '../../../../core/models/RoleModel';
import {RoleService} from '../../../../core/services/role.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-new-role',
  templateUrl: './new-role.component.html',
  styleUrls: ['./new-role.component.scss']
})
export class NewRoleComponent implements OnInit {

  /**
   * @type newRoleForm: FormGroup
   */
  newRoleForm:FormGroup;
  /**
   * @type roleModel: RoleModel[]
   */
  roleModel:RoleModel[];

  /**
   * @param formBuilder: FormBuilder
   * @param roleService: RoleService
   */
  constructor(
    private formBuilder:FormBuilder,
    private roleService:RoleService) { }

  /**
   * @description Get a list of roles and init form
   */
  ngOnInit(): void {
    this.initForm();
    this.roleService.getRoles().subscribe(data => {
      this.roleModel = data;
    });
  }

  /**
   * @description Form of role
   */
  initForm(){
    this.newRoleForm = this.formBuilder.group({
      role:new FormControl('',[Validators.required])
    },{validators:[this.validForm()]})
  }

  /**
   * @description Valid form
   */
  validForm(){
    return (role: FormGroup) => {
      const rol = role.get('role').value;
      if(rol) {
        const find = this.roleModel.find(r => r.role === rol && r.delete_at == null);
        return !find ? null : {roleAlreadyExist: true};
      }
    }
  }

  /**
   * @description Add new role
   */
  onSubmitForm(){
    this.roleService.newRole(this.newRoleForm.value);
  }
}
