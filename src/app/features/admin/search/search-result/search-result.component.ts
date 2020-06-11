import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {UserService} from '../../../../core/services/user.service';
import {UserModel} from '../../../../core/models/UserModel';


@Component({
  selector: 'app-search-result',
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.scss']
})
export class SearchResultComponent implements OnInit {

  /**
   * @type userModel: string or UserModel[]
   */
  userModel:string | UserModel[];
  /**
   * linkUpdateRoleAndGroup: Array
   */
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
   * @param route: ActivatedRoute
   * @param userService: UserService
   * @param router: Router
   */
  constructor(private route: ActivatedRoute, public userService:UserService, private router:Router) { }

  /**
   * @description Get a user by keyWord
   */
  ngOnInit(): void {
      this.userService.getUser(this.route.snapshot.paramMap.get('keyWord')).subscribe(data => {
        this.userModel = data;
      });
    this.userModel = [];
  }

  /**
   * @param userId: Number
   * @param groupe: Number
   * @description To remove a groupe from user
   */
  onRemoveGroupe(userId,groupe){
    this.userService.removeGroupe(userId,groupe);
  }

  /**
   * @param roleID: Number
   * @description To remove a role from user
   */
  onRemoveRole(roleID){
    this.userService.removeRole(roleID);
  }
}

