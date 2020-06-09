import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UploadService {

  constructor(private httpClient: HttpClient) {
  }
   public upload(file: File,productId){
      const formData = new FormData();
      formData.append('picture',file,file.name);
      return this.httpClient.post(environment.url+'product/uploadPicture/'+productId, formData).subscribe(res => {
        console.log(res);
      })
    };
}
