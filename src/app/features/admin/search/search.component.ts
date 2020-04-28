import {Component,OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {UserService} from '../../../core/services/user.service';
import {UserModel} from '../../../core/models/UserModel';
import {FormBuilder, FormGroup, NgForm, Validators} from '@angular/forms';
import {GroupeModel} from '../../../core/models/GroupeModel';
import {RoleModel} from '../../../core/models/RoleModel';
import {GroupeService} from '../../../core/services/groupe.service';
import {RoleService} from '../../../core/services/role.service';
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  searchGroup: FormGroup;
  userModel:UserModel[];
  groupeModel:GroupeModel;
  groupeModelArray:GroupeModel[];
  rolesModelArray:RoleModel[];
  roleModel:RoleModel;
  updateGr = false;
  upfateRl = false;

  /**
   * @param router
   * @param formBuilder
   * @param userService
   * @param groupeService
   * @param roleService
   */
  constructor(
    private router:Router,
    private formBuilder: FormBuilder,
    private userService: UserService,
    private groupeService: GroupeService,
    private roleService:RoleService

  ) { }

  ngOnInit(): void {
    this.initForm();
    this.getGroupe();
    this.getRole();
  }

  getGroupe(){
    this.groupeService.getGroupe().subscribe(
      data => {
        this.groupeModelArray = data
      },
      error => {
        console.log('Erreur : '+error)
      }
    )
  }

  getRole(){
    this.roleService.getRoles().subscribe(
      data => {
        this.rolesModelArray = data
      },
      error => {
        console.log('Erreur : '+error);
      }
    )
  }

  /**
   * Search Form
   */
  initForm(){
    this.searchGroup = this.formBuilder.group({
      search: ['',Validators.required]
    })
  }

  /**
   * Submit form. Use service to get the user from back
   */
  onSubmitForm(){
    this.userService.getUser(this.searchGroup.getRawValue()).subscribe(
      data => {
        this.userModel = data;

      },
      error => {
        console.log('Erreur : '+error)
      }
    )
  }
  /**
   * Submit form. Use service to get the user from back
   */
  onSubmitFormGroupe(form: NgForm){
    console.log(form.value)
  }
  /**
   * Submit form. Use service to get the user from back
   */
  onSubmitFormRole(form: NgForm){
    console.log(form.value)
  }

  onRemoveGroupe(){
    console.log('Groupe effacer');
  }
  onRemoveRole(){
    console.log('Role Effacer');
  }
}
