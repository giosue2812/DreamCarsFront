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

  loginGroup: FormGroup;
  messageError: string;

  /**
   * @param router
   * @param formBuilder
   * @param connexionService
   * @param sessionService
   */
  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private connexionService: ConnexionService,
    private sessionService: SessionService
  ) { }

  ngOnInit(): void {
    this.initForm();
  }

  /**
   * Form for login
   */
  initForm(){
    this.loginGroup = this.formBuilder.group({
      username:['',Validators.required],
      password:['',Validators.required]
    })
  }

  /**
   * When form is ok.
   * I call the service to check the credential.
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
        },
        error => {
          /**
           * If the credential is False i send a message.
           */
          //Amelioration show in an toast
          return this.messageError = error.statusText;
        }
      );
  }

}
