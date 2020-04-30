import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {UserService} from '../../../../core/services/user.service';
import {UserModel} from '../../../../core/models/UserModel';
import {Router} from '@angular/router';

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
    })
  }

  /**
   * Submit search to the route. This route is a resolver
   */
  onSubmitForm() {
    this.router.navigateByUrl('admin/search/result/' + this.searchGroup.get('search').value);
  }
}
