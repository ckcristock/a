import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotasContablesComponent } from './notas-contables/notas-contables.component';
import { NgbDropdownModule, NgbPaginationModule, NgbTypeaheadModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgSelectModule } from '@ng-select/ng-select';
import { ComponentsModule } from '../../../components/components.module';
import { CrearNotaContableComponent } from './notas-contables/crear-nota-contable/crear-nota-contable.component';
import { ComprobantesRoutingModule } from './comprobantes-routing.module';
import { MyDateRangePickerModule } from 'mydaterangepicker';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';
import { BorradorcomprobantesComponent } from './borradorcomprobantes/borradorcomprobantes.component';
import { EgresosComponent } from './egresos/egresos.component';
import { ComprobanteegresovarioscrearComponent } from './egresos/comprobanteegresovarioscrear/comprobanteegresovarioscrear.component';



@NgModule({
  declarations: [
    NotasContablesComponent,
    CrearNotaContableComponent,
    BorradorcomprobantesComponent,
    EgresosComponent,
    ComprobanteegresovarioscrearComponent
  ],
  imports: [
    CommonModule,
    NgbDropdownModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgbPaginationModule,
    NgSelectModule,
    ComponentsModule,
    ComprobantesRoutingModule,
    NgbTypeaheadModule,
    MyDateRangePickerModule,
    SweetAlert2Module
  ]
})
export class ComprobantesModule { }
