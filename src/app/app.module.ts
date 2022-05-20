import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClient, HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AuthModule } from './auth/auth.module';
import { LayoutsModule } from './layouts/layouts.module';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { LoginComponent } from './login/login.component';
import { AuthInterceptor } from './auth.interceptor';
// import { PublicRoutingModule } from './public/public-routing.module';
// import { PublicModule } from './public/public.module';
import { NgSelectModule } from '@ng-select/ng-select';
import { FormsModule } from '@angular/forms';
import { ArchwizardModule } from 'angular-archwizard';
import { FilterPipe } from './filter.pipe';
import { CacheInterceptor } from './cache.interceptor';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';
import { AngularEditorModule } from '@kolkov/angular-editor';
import { AngularFileUploaderModule } from "angular-file-uploader";
import { ModalService } from './core/services/modal.service';
export function createTranslateLoader(http: HttpClient): any {
  return new TranslateHttpLoader(http, 'assets/i18n/', '.json');
}

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    FilterPipe

  ],
  imports: [
    HttpClientModule,
    ArchwizardModule,
    BrowserAnimationsModule,
    BrowserModule,
    AppRoutingModule,
    AuthModule,
    LayoutsModule,
    NgSelectModule,
    FormsModule,
    CKEditorModule,
    AngularEditorModule,
    AngularFileUploaderModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: createTranslateLoader,
        deps: [HttpClient]
      }
    }),
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
    // { provide: HTTP_INTERCEPTORS, useClass: CacheInterceptor, multi: true },
    ModalService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
