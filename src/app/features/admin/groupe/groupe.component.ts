import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {GroupeModel} from '../../../core/models/GroupeModel';
import {ActivatedRoute} from '@angular/router';
import {GroupeService} from '../../../core/services/groupe.service';

@Component({
  selector: 'app-groupe',
  templateUrl: './groupe.component.html',
  styleUrls: ['./groupe.component.scss']
})
export class GroupeComponent implements OnInit {

  /**
   * @type editGroupeForm: FormGroup
   */
  editGroupeForm:FormGroup;
  /**
   * @type groupeModel: GroupeModel[]
   */
  groupeModel:GroupeModel[];

  /**
   * @param groupeService: GroupeService
   * @param route: ActivatedRoute
   * @param formBuilder: FormBuilder
   */
  constructor(public groupeService:GroupeService,
              private route:ActivatedRoute,
              private formBuilder: FormBuilder) { }

  /**
   * @description Init a list of groupe and a form
   */
  ngOnInit(): void {
    this.initForm();
    this.groupeService.getGroupes().subscribe(data => {
      this.groupeModel = data;
    })
  }

  /**
   * @description Form to init a form groupe
   */
  initForm(){
    this.editGroupeForm = this.formBuilder.group({
      groupe: new FormControl('',[Validators.required])
    },{
      validators:[this.validForm()]
    })
  }

  /**
   * @return groupe: FormGroup or find == null
   * @description Valid form
   */
  validForm(){
    return(groupe: FormGroup) => {
      const group = groupe.get('groupe').value;
      if(group){
        const find = this.groupeModel.find(g => g.groupe === group && g.delete_at === null);
        return !find ? null: {groupeAlreadyExist: true};
      }
    }
  }

  /**
   * @param idGroupe Number
   * @description Update a groupe
   */
  onSubmitForm(idGroupe){
    this.groupeService.updateGroupe(idGroupe,this.editGroupeForm.value);
  }

  /**
   * @param idGroupe Number
   * @description Remove a groupe
   */
  removeGroupe(idGroupe){
    this.groupeService.removeGroupe(idGroupe);
  }
}
