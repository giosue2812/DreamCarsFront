import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Route} from '@angular/router';
import {RoleModel} from '../../../core/models/RoleModel';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
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
      this.initForm();
      this.roleService.getRoles().subscribe(data => {
        this.roleModel = data;
      });
  }

  initForm(){
    this.editRoleForm = this.formBuilder.group({
      role: new FormControl('', [Validators.required])
    }, {
      validators: [this.validForm()]
    })
  }

  validForm() {
    return (role: FormGroup) => {
      const rol = role.get('role').value;
      if(rol) {
        const find = this.roleModel.find(r => r.role === rol && r.delete_at == null);
        return !find ? null : {roleAlreadyExist: true};
      }
    }
  }

  onSubmitForm(idRole){
        this.roleService.updateRole(idRole,this.editRoleForm.value)
  }

  removeRole(idRole){
    this.roleService.removeRole(idRole);
  }
}
