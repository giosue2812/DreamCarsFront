import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Route} from '@angular/router';
import {RoleModel} from '../../../core/models/RoleModel';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {Subscription} from 'rxjs';
import {RoleService} from '../../../core/services/role.service';

@Component({
  selector: 'app-role',
  templateUrl: './role.component.html',
  styleUrls: ['./role.component.scss']
})
export class RoleComponent implements OnInit {

  editRoleForm:FormGroup;
  roleModel:RoleModel[];

  constructor(
    public roleService: RoleService,
    private route:ActivatedRoute,
    private formBuilder:FormBuilder) { }

  ngOnInit(): void {
   this.roleService.getRoles().subscribe(data => {
     this.roleModel = data;
     this.initForm();
   });
    // this.initForm();
  }

  initForm()
  {
    this.editRoleForm = this.formBuilder.group({
      role: new FormControl('', [Validators.required])
    }, {
      validators: [this.validForm()]
    })
  }

  validForm() {
    return (group: FormGroup) => {
      const role = group.get('role').value;
      const find = this.roleModel.find(r => r.role === role);
      return !find ? null : {roleAlreadyExist: true};
    }
  }

  onSubmitForm(){
    if (this.editRoleForm.valid){
      console.log(this.editRoleForm.value);
    }
  }

  removeRole(roleId){
    console.log(roleId);
  }
}
