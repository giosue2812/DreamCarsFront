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

  editGroupeForm:FormGroup;
  groupeModel:GroupeModel;

  constructor(public groupeService:GroupeService,
              private route:ActivatedRoute,
              private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.initForm();
    this.groupeService.getGroupes().subscribe(data => {
      this.groupeModel = data;
    })
  }

  initForm(){
    this.editGroupeForm = this.formBuilder.group({
      groupe: new FormControl('',[Validators.required])
    },{
      validators:[this.validForm()]
    })
  }

  validForm(){
    return(groupe: FormGroup) => {
      const group = groupe.get('groupe').value;
      if(group){
        const find = this.groupeModel.data.find(g => g.groupe === group);
        return !find ? null: {groupeAlreadyExist: true};
      }
    }
  }

  onSubmitForm(idGroupe){
    this.groupeService.updateGroupe(idGroupe,this.editGroupeForm.value);
  }

  removeGroupe(idGroupe){
    this.groupeService.removeGroupe(idGroupe);
  }
}
