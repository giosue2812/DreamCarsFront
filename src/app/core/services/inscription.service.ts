import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../environments/environment';
import {Router} from '@angular/router';
import {UserModel} from '../models/UserModel';
@Injectable({
  providedIn: 'root'
})
export class InscriptionService {

  /**
   * @param httpClient: HttpClient
   * @param router: Router
   */
  constructor(private httpClient: HttpClient, private router: Router) { }

  /**
   * @param userModel: UserModel
   * @return subscribe
   */
  onRecordServer(userModel: UserModel){
      return this.httpClient.post(environment.url+'create',userModel).subscribe(
      ()=>{
        this.router.navigateByUrl('connexion');
      }
    );

  }
}
