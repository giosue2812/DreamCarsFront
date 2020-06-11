import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ConnexionService} from '../../../core/services/connexion.service';
import {SessionService} from '../../../core/services/session.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-form-login',
  templateUrl: './form-login.component.html',
  styleUrls: ['./form-login.component.scss']
})
export class FormLoginComponent implements OnInit {

  /**
   * @type loginGroup: FormGroup
   */
  loginGroup: FormGroup;
  /**
   * @type messageError: String
   */
  messageError: string;

  /**
   * @param router: Router
   * @param formBuilder: FormBuilder
   * @param connexionService: ConnexionService
   * @param sessionService: SessionService
   */
  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private connexionService: ConnexionService,
    private sessionService: SessionService
  ) { }

  /**
   * @description Init form
   */
  ngOnInit(): void {
    this.initForm();
  }

  /**
   * @description form to log
   */
  initForm(){
    this.loginGroup = this.formBuilder.group({
      username:['',Validators.required],
      password:['',Validators.required]
    })
  }

  /**
   * @description Login
   */
  onSubmitForm(){
    this.connexionService.login(this.loginGroup.value)
      .subscribe(
        data => {
          /**
           * When credential is done I call sessionService to save the tokken
           */
          this.sessionService.start(data);
          /**
           * Navigation to the home page
           */
          this.router.navigateByUrl('home');
        }
      );
  }

}
