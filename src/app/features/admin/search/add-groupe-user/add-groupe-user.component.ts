import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import {ActivatedRoute} from '@angular/router';
import {GroupeModel} from '../../../../core/models/GroupeModel';

@Component({
  selector: 'app-add-groupe-user',
  templateUrl: './add-groupe-user.component.html',
  styleUrls: ['./add-groupe-user.component.scss']
})
export class AddGroupeUserComponent implements OnInit {

  groupeModel:GroupeModel[]

  constructor(private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.route.data.subscribe((data:{groupeAll:GroupeModel[]})=>this.groupeModel = data.groupeAll)
  }

  onSubmitFormGroupe(form:NgForm){}
}
