import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpClient: HttpClient) { }

  /**
   * @param username
   * We get the user id from the server.
   */
  getIdUser(username: string){
    return 15;
  }

}
