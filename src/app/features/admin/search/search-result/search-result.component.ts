import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {UserService} from '../../../../core/services/user.service';
import {UserModel} from '../../../../core/models/UserModel';
import {catchError} from 'rxjs/operators';
import {of} from 'rxjs';


@Component({
  selector: 'app-search-result',
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.scss']
})
export class SearchResultComponent implements OnInit {

  userModel:string | UserModel[];
  errorMessage:string;
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
  constructor(private route: ActivatedRoute, public userService:UserService, private router:Router) { }

  /**
   * Get user from route
   */
  ngOnInit(): void {
      this.userService.getUser(this.route.snapshot.paramMap.get('keyWord')).subscribe(data => {
        this.userModel = data;
      });
    this.userModel = [];
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

