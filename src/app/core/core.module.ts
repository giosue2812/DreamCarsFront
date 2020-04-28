import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ConnexionService} from './services/connexion.service';
import {HttpClientModule} from '@angular/common/http';
import {SessionService} from './services/session.service';
import {InscriptionService} from './services/inscription.service';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HttpClientModule,
  ],
  providers:[ConnexionService,SessionService,InscriptionService]
})
export class CoreModule { }
