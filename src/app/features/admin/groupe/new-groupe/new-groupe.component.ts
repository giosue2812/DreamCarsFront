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

  newGroupeForm:FormGroup;
  groupeModel:GroupeModel;

  constructor(private formBuilder:FormBuilder,
              private groupeService:GroupeService) { }

  ngOnInit(): void {
    this.initForm();
    this.groupeService.getGroupes().subscribe(data => {
      this.groupeModel = data;
    })
  }

  initForm(){
    this.newGroupeForm = this.formBuilder.group({
      groupe:new FormControl('',[Validators.required])
    },{validators:[this.validForm()]})
  }

  validForm(){
    return(groupe: FormGroup) => {
      const group = groupe.get('groupe').value;
      if(group){
        const find = this.groupeModel.data.find(g => g.groupe === group && g.delete_at == null);
        return !find ? null: {groupeAlreadyExist: true};
      }
    }
  }

  onSubmitForm(){
    console.log(this.newGroupeForm.value);
  }

}
