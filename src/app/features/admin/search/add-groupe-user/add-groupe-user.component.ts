import {Component, Input, OnInit} from '@angular/core';
import {FormGroup, NgForm, FormBuilder, Validators, FormControl} from '@angular/forms';
import {ActivatedRoute, NavigationEnd, Router} from '@angular/router';
import {GroupeModel} from '../../../../core/models/GroupeModel';
import {UserService} from '../../../../core/services/user.service';
import {GroupeService} from '../../../../core/services/groupe.service';
import {UserModel} from '../../../../core/models/UserModel';

@Component({
  selector: 'app-add-groupe-user',
  templateUrl: './add-groupe-user.component.html',
  styleUrls: ['./add-groupe-user.component.scss']
})
export class AddGroupeUserComponent implements OnInit {
  /**
   * A variable groupeModel is to get a value from form
   */
  groupeModel:GroupeModel[];
  userModel:UserModel;
  addGroupeForm:FormGroup;

  /**
   * @param route
   * @param userService
   * @param groupeService
   * @param formBuilder
   */
  constructor(
    private route:ActivatedRoute,
    private userService: UserService,
    public groupeService: GroupeService,
    private formBuilder: FormBuilder) {}

  /**
   * This subscribe get a parms from route "groueAll" and push into groupeModelChioce.
   */
  ngOnInit(): void {
    this.groupeService.getGroupe().subscribe(data => {
      this.groupeModel = data;
      this.initForm();
    });
  }

  initForm(){
    this.addGroupeForm = this.formBuilder.group({
      groupe:new FormControl('',[Validators.required])
    },{
      validators: [this.validForm()]
    });
  }

  validForm(){
    return (group: FormGroup) => {
      const groupe = group.get('groupe').value;
      this.userService.getUserById(this.route.snapshot.paramMap.get('user')).subscribe(
        data => {
          this.userModel = data;
        }
      );
      const find = this.userModel.data.groupe.find(r => r == groupe);
      return !find ? null : {groupeAlreadyExist: true};
    }
  }

  onSubmitFormGroupe(){
    this.userService.addGroupe(this.route.snapshot.paramMap.get('user'),this.addGroupeForm.value);
  }
}
