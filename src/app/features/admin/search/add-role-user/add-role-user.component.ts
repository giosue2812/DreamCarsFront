import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {RoleModel} from '../../../../core/models/RoleModel';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-add-role-user',
  templateUrl: './add-role-user.component.html',
  styleUrls: ['./add-role-user.component.scss']
})
export class AddRoleUserComponent implements OnInit {

  roleModel:RoleModel[];

  constructor(private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.route.data.subscribe((data:{roleAll:RoleModel[]})=> this.roleModel = data.roleAll)
  }
  onSubmitFormRole(form:NgForm){}
}
