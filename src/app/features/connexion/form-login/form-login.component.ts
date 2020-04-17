import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ConnexionService} from '../../../core/services/connexion/connexion.service';
import {SessionService} from '../../../core/services/connexion/session.service';
import {$t} from 'codelyzer/angular/styles/chars';
import {Router} from '@angular/router';

@Component({
  selector: 'app-form-login',
  templateUrl: './form-login.component.html',
  styleUrls: ['./form-login.component.scss']
})
export class FormLoginComponent implements OnInit {

  loginGroup: FormGroup;
  messageError: string;

  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private connexionService: ConnexionService,
    private sessionService: SessionService
  ) { }

  ngOnInit(): void {
    this.initForm();
  }

  initForm(){
    this.loginGroup = this.formBuilder.group({
      username:['',Validators.required],
      password:['',Validators.required]
    })
  }

  onSubmitForm(){
    this.connexionService.login(this.loginGroup.value)
      .subscribe(
        data => {
          this.sessionService.start(data);
          this.router.navigateByUrl('');
        },
        error => {
          console.log(error);
          return this.messageError = error.statusText;
        }
      );
  }

}
