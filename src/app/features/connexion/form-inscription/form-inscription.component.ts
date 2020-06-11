import {Component, Input, OnInit} from '@angular/core';
import {Form, FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {InscriptionService} from '../../../core/services/inscription.service';
@Component({
  selector: 'app-form-inscription',
  templateUrl: './form-inscription.component.html',
  styleUrls: ['./form-inscription.component.scss']
})
export class FormInscriptionComponent implements OnInit {

  /**
   * @type inscriptionGroup: FormGroup
   */
  inscriptionGroup: FormGroup;

  /**
   * @param router: Router
   * @param formBuilder: FormBuilder
   * @param inscriptionService: InscriptionService
   */
  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private inscriptionService: InscriptionService
  ) { }

  /**
   * @description Init form
   */
  ngOnInit(): void {
    this.initForm();
  }

  /**
   * @description Form new user
   */
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
   * @description Add new user
   */
  onSubmitForm(){
    this.inscriptionService.onRecordServer(this.inscriptionGroup.value)
  }
}
