import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ConnexionService} from './services/connexion/connexion.service';
import {HttpClientModule} from '@angular/common/http';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HttpClientModule
  ],
  providers:[ConnexionService]
})
export class CoreModule { }
