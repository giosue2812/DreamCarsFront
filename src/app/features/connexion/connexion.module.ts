import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConnexionRoutingModule } from './connexion-routing.module';
import { FormLoginComponent } from './form-login/form-login.component';
import {ReactiveFormsModule} from '@angular/forms';
import { FormInscriptionComponent } from './form-inscription/form-inscription.component';


@NgModule({
  declarations: [FormLoginComponent, FormInscriptionComponent],
    imports: [
        CommonModule,
        ConnexionRoutingModule,
        ReactiveFormsModule
    ]
})
export class ConnexionModule { }
