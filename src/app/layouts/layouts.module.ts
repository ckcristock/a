import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { SharedModule } from './shared/shared.module';

import { LayoutComponent } from './layout/layout.component';

@NgModule({
  declarations: [  LayoutComponent],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule
  ],
  exports: [ ]
})
export class LayoutsModule { }
