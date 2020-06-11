import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {GroupeModel} from '../../../../core/models/GroupeModel';
import {GroupeService} from '../../../../core/services/groupe.service';

@Component({
  selector: 'app-new-groupe',
  templateUrl: './new-groupe.component.html',
  styleUrls: ['./new-groupe.component.scss']
})
export class NewGroupeComponent implements OnInit {

  /**
   * @type newGroupeForm: FormGroup
   */
  newGroupeForm:FormGroup;
  /**
   * @type groupeModel: GroupeModel
   */
  groupeModel:GroupeModel[];

  /**
   * @param formBuilder: FormBuilder
   * @param groupeService: GroupeService
   */
  constructor(private formBuilder:FormBuilder,
              private groupeService:GroupeService) { }

  /**
   * @description Init form and get list of groupes
   */
  ngOnInit(): void {
    this.initForm();
    this.groupeService.getGroupes().subscribe(data => {
      this.groupeModel = data;
    })
  }

  /**
   * @description Init form
   */
  initForm(){
    this.newGroupeForm = this.formBuilder.group({
      groupe:new FormControl('',[Validators.required])
    },{validators:[this.validForm()]})
  }

  /**
   * @description Valid Form
   */
  validForm(){
    return(groupe: FormGroup) => {
      const group = groupe.get('groupe').value;
      if(group){
        const find = this.groupeModel.find(g => g.groupe === group && g.delete_at == null);
        return !find ? null: {groupeAlreadyExist: true};
      }
    }
  }

  /**
   * @description Add a new groupe
   */
  onSubmitForm(){
    this.groupeService.newGroupe(this.newGroupeForm.value);
  }

}
