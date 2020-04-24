import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {UserService} from '../../../core/services/connexion/user.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  searchGroup: FormGroup;

  constructor(
    private router:Router,
    private formBuilder: FormBuilder,
    private userService: UserService

  ) { }

  ngOnInit(): void {
    this.initForm();
  }

  initForm(){
    this.searchGroup = this.formBuilder.group({
      search: ['',Validators.required]
    })
  }

  onSubmitForm(){
    this.userService.getUser(this.searchGroup.getRawValue())
  }

}
