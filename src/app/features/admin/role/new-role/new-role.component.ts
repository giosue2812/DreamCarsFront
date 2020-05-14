import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {RoleModel} from '../../../../core/models/RoleModel';
import {RoleService} from '../../../../core/services/role.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-new-role',
  templateUrl: './new-role.component.html',
  styleUrls: ['./new-role.component.scss']
})
export class NewRoleComponent implements OnInit {


  newRoleForm:FormGroup;

  constructor(private formBuilder:FormBuilder, private roleService:RoleService,private router:Router) { }

  ngOnInit(): void {
    this.initForm();
  }

  initForm(){
    this.newRoleForm = this.formBuilder.group({
      role:['',Validators.required]
    })
  }

  onSubmitForm(){
    this.roleService.newRole(this.newRoleForm.value);
  }
}
