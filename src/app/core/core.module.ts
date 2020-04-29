import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ConnexionService} from './services/connexion.service';
import {HttpClientModule} from '@angular/common/http';
import {SessionService} from './services/session.service';
import {InscriptionService} from './services/inscription.service';
import {UserService} from './services/user.service';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HttpClientModule,
  ],
  providers:[ConnexionService,SessionService,InscriptionService,UserService]
})
export class CoreModule { }
