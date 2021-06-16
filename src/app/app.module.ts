import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClient, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AuthModule } from './auth/auth.module';
import { LayoutsModule } from './layouts/layouts.module';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { LoginComponent } from './login/login.component';
import { AuthInterceptor } from './auth.interceptor';
import { PublicRoutingModule } from './public/public-routing.module';
import { PublicModule } from './public/public.module';


export function createTranslateLoader(http: HttpClient): any {
  return new TranslateHttpLoader(http, 'assets/i18n/', '.json');
}

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AuthModule,
    LayoutsModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: createTranslateLoader,
        deps: [HttpClient]
      }
    }),
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
