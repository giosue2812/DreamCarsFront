import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {UserService} from '../../../core/services/connexion/user.service';
import {UserModel} from '../../../core/models/UserModel';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  searchGroup: FormGroup;
  userModel:UserModel[];

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

}
