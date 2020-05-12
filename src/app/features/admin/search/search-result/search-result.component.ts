import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Data, Route, Router} from '@angular/router';
import {UserModelArray} from '../../../../core/models/UserModelArray';
import {UserService} from '../../../../core/services/user.service';


@Component({
  selector: 'app-search-result',
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.scss']
})
export class SearchResultComponent implements OnInit {

  userModelArray:UserModelArray;

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
    this.route.data.subscribe(
      (data:{userFound:UserModelArray}) => {this.userModelArray = data.userFound}
    );
  }

  /**
   * Method used to remove a group from user
   * @param userId
   * @param groupe
   */
  onRemoveGroupe(userId,groupe){
    this.userService.removeGroupe(userId,groupe);
    return new Promise(resolve => {
      setTimeout(()=>{
        window.location.reload();
        resolve();
      },1000)
    })
  }
  onRemoveRole(roleID){
    this.userService.removeRole(roleID);
    return new Promise(resolve => {
      setTimeout(()=>{
        window.location.reload();
        resolve();
      },1000)
    })
  }
}

