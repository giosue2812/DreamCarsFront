import {Component,OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {UserService} from '../../../core/services/connexion/user.service';
import {UserModel} from '../../../core/models/UserModel';
import {FormBuilder, FormGroup, NgForm, Validators} from '@angular/forms';
import {GroupeModel} from '../../../core/models/GroupeModel';
import {RoleModel} from '../../../core/models/RoleModel';
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  searchGroup: FormGroup;
  userModel:UserModel[];
  groupeModel:GroupeModel;
  roleModel:RoleModel;
  updateGr = false;
  upfateRl = false;

  /**
   * @param router
   * @param formBuilder
   * @param userService
   */
  constructor(
    private router:Router,
    private formBuilder: FormBuilder,
    private userService: UserService

  ) { }

  ngOnInit(): void {
    this.initForm();
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
