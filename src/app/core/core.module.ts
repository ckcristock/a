import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImagePipe } from './pipes/image.pipe';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [],
  imports:[
    CommonModule,
    HttpClientModule
  ]
})
export class CoreModule { }
