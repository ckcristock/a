import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InformesdianRoutingModule } from './informesdian-routing.module';
import { MediosmagneticosComponent } from './mediosmagneticos/mediosmagneticos.component';
import { MediomagneticocrearComponent } from './mediosmagneticos/mediomagneticocrear/mediomagneticocrear.component';
import { MediomagagrupadosespComponent } from './mediosmagneticos/mediomagagrupadosesp/mediomagagrupadosesp.component';
import { MediomagneticoagrupacioncrearComponent } from './mediosmagneticos/mediomagagrupadosesp/mediomagneticoagrupacioncrear/mediomagneticoagrupacioncrear.component';
import { FormsModule } from '@angular/forms';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';
import { ComponentsModule } from '../../../components/components.module';


@NgModule({
  declarations: [MediosmagneticosComponent, MediomagneticocrearComponent, MediomagagrupadosespComponent, MediomagneticoagrupacioncrearComponent],
  imports: [
    CommonModule,
    InformesdianRoutingModule,
    FormsModule,
    SweetAlert2Module,
    ComponentsModule
  ]
})
export class InformesdianModule { }
