import { NgModule } from '@angular/core';
import { ComprasRoutingModule } from './compras-routing.module';
import { MyDateRangePickerModule } from 'mydaterangepicker';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { CompraNacionalComponent } from './compra-nacional/compra-nacional.component';
import { ComponentsModule } from '../../components/components.module';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';
import { CrearCompraNacionalComponent } from './compra-nacional/crear-compra-nacional/crear-compra-nacional.component';
import { NgbTypeaheadModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
    declarations:[CompraNacionalComponent, CrearCompraNacionalComponent],
    imports:[
        CommonModule,
        FormsModule,
        ComprasRoutingModule,
        ComponentsModule,
        MyDateRangePickerModule,
        NgbTypeaheadModule,
        SweetAlert2Module.forRoot()

    ],
})

export class ComprasModule{}