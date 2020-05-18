import {AfterViewInit, Component, Input, OnInit, Output} from '@angular/core';
import {ActivatedRoute, Route} from '@angular/router';
import {RoleModel} from '../../../core/models/RoleModel';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {RoleService} from '../../../core/services/role.service';
import {toNumbers} from '@angular/compiler-cli/src/diagnostics/typescript_version';

@Component({
  selector: 'app-role',
  templateUrl: './role.component.html',
  styleUrls: ['./role.component.scss']
})
export class RoleComponent implements OnInit {

  @Input() idRole = 0;
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

  onSubmitForm(idRole){
        this.roleService.updateRole(idRole,this.editRoleForm.value)
  }

  removeRole(roleId){
    console.log(roleId);
  }
}
