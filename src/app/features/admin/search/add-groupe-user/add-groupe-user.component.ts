import {Component, Input, OnInit} from '@angular/core';
import {NgForm} from '@angular/forms';
import {ActivatedRoute} from '@angular/router';
import {GroupeModel} from '../../../../core/models/GroupeModel';
import {UserService} from '../../../../core/services/user.service';

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

  /**
   * @param route
   * @param userService
   */
  constructor(private route:ActivatedRoute, private userService: UserService) { }

  /**
   * This subscribe get a parms from route "groueAll" and push into groupeModelChioce.
   */
  ngOnInit(): void {
    this.route.data.subscribe((data:{groupeAll:GroupeModel[]})=>this.groupeModelChoice = data.groupeAll)
  }

  /**
   * @param form
   */
  onSubmitFormGroupe(form:NgForm){
    this.userService.addGroupe(this.route.snapshot.paramMap.get('user'),form.value);
  }
}
