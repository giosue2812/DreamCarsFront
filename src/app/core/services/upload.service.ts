import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UploadService {

  /**
   * @param httpClient HttpClient
   */
  constructor(private httpClient: HttpClient) {}

  /**
   * @param file: File
   * @param productId Number
   * @return subscribe
   * @description Request to upload a picture
   */
   public upload(file: File,productId){
      const formData = new FormData();
      formData.append('picture',file,file.name);
      return this.httpClient.post(environment.url+'product/uploadPicture/'+productId, formData).subscribe(res => {
        console.log(res);
      })
    };
}
