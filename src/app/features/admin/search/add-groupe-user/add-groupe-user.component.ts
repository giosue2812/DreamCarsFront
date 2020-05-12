import {Component, Input, OnInit} from '@angular/core';
import {FormGroup, NgForm,FormBuilder,Validators} from '@angular/forms';
import {ActivatedRoute, NavigationEnd, Router} from '@angular/router';
import {GroupeModel} from '../../../../core/models/GroupeModel';
import {UserService} from '../../../../core/services/user.service';
import {Location} from '@angular/common';
import set = Reflect.set;

@Component({
  selector: 'app-add-groupe-user',
  templateUrl: './add-groupe-user.component.html',
  styleUrls: ['./add-groupe-user.component.scss']
})
export class AddGroupeUserComponent implements OnInit {
  /**
   * A variable groupeModel is to get a value from form
   */
  groupeModel:GroupeModel;
  /**
   * A varible to get all groupe in a array
   */
  groupeModelChoice:GroupeModel[];

  addGroupeForm:FormGroup;

  /**
   * @param route
   * @param userService
   * @param formBuilder
   */
  constructor(
    private route:ActivatedRoute,
    private userService: UserService,
    private formBuilder: FormBuilder) {}

  /**
   * This subscribe get a parms from route "groueAll" and push into groupeModelChioce.
   */
  ngOnInit(): void {
    this.route.data.subscribe((data:{groupeAll:GroupeModel[]})=>this.groupeModelChoice = data.groupeAll)
    this.initForm();
  }

  initForm(){
    this.addGroupeForm = this.formBuilder.group({
      groupe:['',Validators.required]
    })
  }

  onSubmitFormGroupe(){
    this.userService.addGroupe(this.route.snapshot.paramMap.get('user'),this.addGroupeForm.value);
    return new Promise(resolve => {
     setTimeout(()=> {
       window.location.reload();
       resolve();
     },1000)
    })
  }
}
