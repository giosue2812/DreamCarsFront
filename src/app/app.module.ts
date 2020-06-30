import {NgModule} from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {SharedModule} from './shared/shared.module';
import {TokenInterceptor} from './core/interceptors/token.interceptor';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {ErrorInterceptor} from './core/interceptors/error.interceptor';
import {LoaderInterceptor} from './core/interceptors/loader.interceptor';
import {NgxSpinnerModule} from 'ngx-spinner';
import {CoreModule} from './core/core.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    AppRoutingModule,
    HttpClientModule,
    SharedModule,
    BrowserAnimationsModule,
    NgxSpinnerModule,
    CoreModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS, multi: true, useClass: TokenInterceptor
    },
    {
      provide: HTTP_INTERCEPTORS, multi: true, useClass: ErrorInterceptor
    },
    {
      provide: HTTP_INTERCEPTORS, multi: true, useClass: LoaderInterceptor
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
