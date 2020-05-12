import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {RoleModel} from '../../../../core/models/RoleModel';
import {FormBuilder, FormGroup, NgForm, Validators} from '@angular/forms';
import {UserService} from '../../../../core/services/user.service';
import set = Reflect.set;

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
  /**
   * A variable to get all groups in a array
   */
  roleModelChoice:RoleModel[];

  addRoleForm:FormGroup;
  constructor(
    private route:ActivatedRoute,
    private userService: UserService,
    private formBuilder:FormBuilder) { }

  /**
   * This subscribe get a parms from route "rolleAll" and push into roleModelChoice
   */
  ngOnInit(): void {
    this.route.data.subscribe((data:{roleAll:RoleModel[]})=> this.roleModelChoice = data.roleAll);
    this.initForm();
  }

  initForm(){
    this.addRoleForm = this.formBuilder.group({
      id_role:['',Validators.required]
    })
  }
  onSubmitFormRole(){
    console.log(this.addRoleForm.value);
    this.userService.addRole(this.route.snapshot.paramMap.get('user'),this.addRoleForm.value);
    return new Promise(resolve => {
      setTimeout(()=>{
        window.location.reload();
        resolve();
      },1000)
    })
  }
}
