import {Component, Input, OnInit} from '@angular/core';
import {FormGroup, NgForm, FormBuilder, Validators, FormControl} from '@angular/forms';
import {ActivatedRoute, NavigationEnd, Router} from '@angular/router';
import {GroupeModel} from '../../../../core/models/GroupeModel';
import {UserService} from '../../../../core/services/user.service';
import {GroupeService} from '../../../../core/services/groupe.service';
import {UserModel} from '../../../../core/models/UserModel';
import {getGlobalAnalytics} from '@angular/cli/models/analytics';

@Component({
  selector: 'app-add-groupe-user',
  templateUrl: './add-groupe-user.component.html',
  styleUrls: ['./add-groupe-user.component.scss']
})
export class AddGroupeUserComponent implements OnInit {
  /**
   * @type groupeModel: GroupeModel[]
   * @type userModel: UserModel[]
   * @type addGroupeForm: FormGroup
   */
  groupeModel:GroupeModel[];
  userModel:UserModel[];
  addGroupeForm:FormGroup;

  /**
   * @param route: ActivatedRoute
   * @param userService: UserService
   * @param groupeService: GroupeService
   * @param formBuilder: FormBuilder
   */
  constructor(
    private route:ActivatedRoute,
    private userService: UserService,
    public groupeService: GroupeService,
    private formBuilder: FormBuilder) {}

  /**
   * @description get a list of groupes and init form
   */
  ngOnInit(): void {
    this.groupeService.getGroupes().subscribe(data => {
      this.groupeModel = data;
      this.initForm();
    });
  }

  /**
   * @description form to add a groupe
   */
  initForm(){
    this.addGroupeForm = this.formBuilder.group({
      groupe:new FormControl('',[Validators.required])
    },{
      validators: [this.validForm()]
    });
  }

  /**
   * @return group: FormGroup or groupeAlreadyExist
   * @description Valid form
   */
  validForm(){
    return (group: FormGroup) => {
      const groupe = group.get('groupe').value;
      this.userService.getUserById(this.route.snapshot.paramMap.get('user')).subscribe(
        data => {
          this.userModel = data;
        }
      );
      if(groupe){
        const find = this.userModel.find(g => g.groupe.find(g => g == groupe));
        return !find ? null : {groupeAlreadyExist: true};
      }
    }
  }

  /**
   * @description form to add groupe
   */
  onSubmitFormGroupe(){
    this.userService.addGroupe(this.route.snapshot.paramMap.get('user'),this.addGroupeForm.value);
  }
}
