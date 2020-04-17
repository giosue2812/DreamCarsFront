import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {UserModel} from '../../models/UserModel';
import {environment} from '../../../../environments/environment';
@Injectable({
  providedIn: 'root'
})
export class InscriptionService {

  private user = [];

  constructor(private httpClient: HttpClient) { }

  onRecordServer(userModel: UserModel){
      return this.httpClient.post(environment.url+'create',userModel).subscribe(
      ()=>{
        console.log('Success')
      },
      (error) => {
        console.log(error)
      }
    );

  }
}
