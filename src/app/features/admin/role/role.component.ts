import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {RoleModel} from '../../../core/models/RoleModel';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {RoleService} from '../../../core/services/role.service';

@Component({
  selector: 'app-role',
  templateUrl: './role.component.html',
  styleUrls: ['./role.component.scss']
})
export class RoleComponent implements OnInit {

  /**
   * @type editRoleForm: FormGroup
   */
  editRoleForm:FormGroup;
  /**
   * @type roleModel: RoleModel[]
   */
  roleModel:RoleModel[];

  /**
   * @param roleService: RoleService
   * @param route: ActivatedRoute
   * @param formBuilder: FormBuilder
   */
  constructor(
    public roleService: RoleService,
    private route:ActivatedRoute,
    private formBuilder:FormBuilder) { }

  /**
   * @description Init form and list of roles
   */
  ngOnInit(): void {
      this.initForm();
      this.roleService.getRoles().subscribe(data => {
        this.roleModel = data;
      });
  }

  /**
   * @description Form to add a group
   */
  initForm(){
    this.editRoleForm = this.formBuilder.group({
      role: new FormControl('', [Validators.required])
    }, {
      validators: [this.validForm()]
    })
  }

  /**
   * @description Valid form
   * @return role: FormGroup or !find null
   */
  validForm() {
    return (role: FormGroup) => {
      const rol = role.get('role').value;
      if(rol) {
        const find = this.roleModel.find(r => r.role === rol && r.delete_at == null);
        return !find ? null : {roleAlreadyExist: true};
      }
    }
  }

  /**
   * @param idRole: Number
   * @description Update role
   */
  onSubmitForm(idRole){
    this.roleService.updateRole(idRole,this.editRoleForm.value)
  }

  /**
   * @param idRole: Number
   * @description Remove role
   */
  removeRole(idRole){
    this.roleService.removeRole(idRole);
  }
}
