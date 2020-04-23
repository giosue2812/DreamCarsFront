import {Component, Input, OnInit} from '@angular/core';
import {Form, FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {InscriptionService} from '../../../core/services/connexion/inscription.service';
@Component({
  selector: 'app-form-inscription',
  templateUrl: './form-inscription.component.html',
  styleUrls: ['./form-inscription.component.scss']
})
export class FormInscriptionComponent implements OnInit {

  inscriptionGroup: FormGroup;

  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private inscriptionService: InscriptionService
  ) { }

  ngOnInit(): void {
    this.initForm();
  }

    initForm(){
    this.inscriptionGroup = this.formBuilder.group({
      email:['',Validators.required],
      password:['',Validators.required],
      passwordConfirm:['',Validators.required],
      firstName:['',Validators.required],
      lastName:['',Validators.required],
      phone:[''],
      street:['',Validators.required],
      number:['',Validators.required],
      postalCode:['',Validators.required],
      city:['',Validators.required],
      country:['',Validators.required]
    })
  }

  /**
   * Method called from the template when the form is ok.
   * Call the service to record the new User.
   */
  onSubmitForm(){
    this.inscriptionService.onRecordServer(this.inscriptionGroup.value)
  }
}
