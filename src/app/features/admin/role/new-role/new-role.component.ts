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

  newRoleForm:FormGroup;
  roleModel:RoleModel;

  constructor(
    private formBuilder:FormBuilder,
    private roleService:RoleService) { }

  ngOnInit(): void {
    this.roleService.getRoles().subscribe(data => {
      this.roleModel = data;
      this.initForm();
    });
  }

  initForm(){
    this.newRoleForm = this.formBuilder.group({
      role:new FormControl('',[Validators.required])
    },{validators:[this.validForm()]})
  }

  validForm(){
    return (role: FormGroup) => {
      const rol = role.get('role').value;
      if(rol) {
        const find = this.roleModel.data.find(r => r.role === rol);
        return !find ? null : {roleAlreadyExist: true};
      }
    }
  }

  onSubmitForm(){
    this.roleService.newRole(this.newRoleForm.value);
  }
}
