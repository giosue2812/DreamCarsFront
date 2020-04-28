import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {UserModel} from '../models/UserModel';
import {environment} from '../../../environments/environment';
import {Router} from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class InscriptionService {

  /**
   * @param httpClient
   * @param router
   */
  constructor(private httpClient: HttpClient, private router: Router) { }

  /**
   * @param userModel
   * I post the new user to the server.
   */
  onRecordServer(userModel: UserModel){
      return this.httpClient.post(environment.url+'create',userModel).subscribe(
      ()=>{
        /**
         * When is done navigation to the url Connexion.
         */
        this.router.navigateByUrl('connexion');
      },
      (error) => {
        //Make a toast to show the error.
        console.log(error)
      }
    );

  }
}
