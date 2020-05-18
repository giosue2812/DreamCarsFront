import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Data, Route, Router} from '@angular/router';
import {UserService} from '../../../../core/services/user.service';
import {UserModel} from '../../../../core/models/UserModel';


@Component({
  selector: 'app-search-result',
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.scss']
})
export class SearchResultComponent implements OnInit {

  userModel:UserModel;

  linkUpdateRoleAndGroup = [
    {
      title:"Update Groupe",
      link:['addGroupe/']
    },
    {
      title:"Update Role",
      link:['addRole/']
    }
  ];

  /**
   * @param route
   * @param userService
   * @param router
   */
  constructor(private route: ActivatedRoute, private userService:UserService, private router:Router) { }

  /**
   * Get user from route
   */
  ngOnInit(): void {
    this.userService.getUser(this.route.snapshot.paramMap.get('keyWord')).subscribe(data => {
      this.userModel = data;
    });
  }

  /**
   * Method used to remove a group from user
   * @param userId
   * @param groupe
   */
  onRemoveGroupe(userId,groupe){
    this.userService.removeGroupe(userId,groupe);
  }
  onRemoveRole(roleID){
    this.userService.removeRole(roleID);
  }
}

