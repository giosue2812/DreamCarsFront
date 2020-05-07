import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Data} from '@angular/router';
import {UserModel} from '../../../../core/models/UserModel';
import {GroupeModel} from '../../../../core/models/GroupeModel';
import {UserService} from '../../../../core/services/user.service';

@Component({
  selector: 'app-search-result',
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.scss']
})
export class SearchResultComponent implements OnInit {

  userModel:UserModel[];

  /**
   * @param route
   * @param userService
   */
  constructor(private route: ActivatedRoute, private userService:UserService) { }

  /**
   * Get user from route
   */
  ngOnInit(): void {
    this.route.data.subscribe(
      (data:{userFound:UserModel[]}) => this.userModel = data.userFound
    );
  }

  /**
   * @param groupe
   * @param userId
   */
  onRemoveGroupe(userId,groupe){
    this.userService.removeRole(userId,groupe);
  }
  onRemoveRole(){}
}

