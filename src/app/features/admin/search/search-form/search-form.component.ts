import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {UserService} from '../../../../core/services/user.service';
import {Router} from '@angular/router';
import {$t} from 'codelyzer/angular/styles/chars';

@Component({
  selector: 'app-search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.scss']
})
export class SearchFormComponent implements OnInit {

  /**
   * @type searchGroup: FormGroup
   */
  searchGroup: FormGroup;

  /**
   * @param formBuilder: FormBuilder
   * @param userService: UserService
   * @param router: Router
   */
  constructor(
    private formBuilder:FormBuilder,
    private userService:UserService,
    private router: Router
  ) { }

  /**
   * @description Init form
   */
  ngOnInit(): void {
    this.initForm();
  }

  /**
   * @description Form to search user
   */
  initForm(){
      this.searchGroup = this.formBuilder.group({
        search: ['', Validators.required]
    });
  }

  /**
   * @description Search user
   */
  onSubmitForm() {
    this.router.navigateByUrl('/admin/search/result/'+this.searchGroup.get('search').value);
  }
}
