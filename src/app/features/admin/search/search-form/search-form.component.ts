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

  searchGroup: FormGroup;

  /**
   * @param formBuilder
   * @param userService
   * @param router
   */
  constructor(
    private formBuilder:FormBuilder,
    private userService:UserService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.initForm();
  }

  /**
   * This form make search user
   */
  initForm(){
      this.searchGroup = this.formBuilder.group({
        search: ['', Validators.required]
    });
  }

  /**
   * Submit search to the route.
   */
  onSubmitForm() {
    this.router.navigateByUrl('/admin/search/result/'+this.searchGroup.get('search').value);
  }
}
