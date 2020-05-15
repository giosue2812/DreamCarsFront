import {AfterViewInit, Component, OnInit} from '@angular/core';
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
  roleModel:RoleModel;

  constructor(
    public roleService: RoleService,
    private route:ActivatedRoute,
    private formBuilder:FormBuilder) { }

  ngOnInit(): void {
      this.roleService.getRoles().subscribe(data => {
        this.roleModel = data;
        this.initForm();
      });
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
    return (role: FormGroup) => {
      const rol = role.get('role').value;
      if(rol) {
        const find = this.roleModel.data.find(r => r.role === rol);
        return !find ? null : {roleAlreadyExist: true};
      }
    }
  }

  onSubmitForm(){
    if (this.editRoleForm.valid) {
      let id_role = 0;
      this.roleModel.data.forEach(function(element) {
        id_role = element.id_role
      });
     return this.roleService.updateRole(id_role,this.editRoleForm.value).subscribe(data => {
       this.roleModel = data;
     });
    }
  }

  removeRole(roleId){
    console.log(roleId);
  }
}
