import { NgModule } from '@angular/core';

import { MyDateRangePickerModule } from 'mydaterangepicker';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { ComponentsModule } from '../../components/components.module';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';

import {
  NgbModalModule,
  NgbPaginationModule,
  NgbTypeaheadModule,
  NgbDropdownModule,
} from '@ng-bootstrap/ng-bootstrap';
import { InventarioRoutingModule } from './inventario-routing.module';
import { InventarioComponent } from './inventario/inventario.component';
import { HttpClientModule } from '@angular/common/http';
import { InventarioFisicoComponent } from './inventario-fisico/inventario-fisico.component';
import {
  ModalAlert,
  ModalformComponent,
} from './inventario-fisico/modalform/modalform.component';
import { ModaldataInitComponent } from './inventario-fisico/modaldata-init/modaldata-init.component';
import { ActaRecepcionComponent } from './acta-recepcion/acta-recepcion.component';
import { CrearActaRecepcionComponent } from './acta-recepcion/crear-acta-recepcion/crear-acta-recepcion.component';

@NgModule({
  declarations: [
    ModalAlert,
    ModalformComponent,
    ModaldataInitComponent,
    InventarioComponent,
    InventarioFisicoComponent,
    ActaRecepcionComponent,
    CrearActaRecepcionComponent,
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    InventarioRoutingModule,
    ComponentsModule,
    MyDateRangePickerModule,
    NgbTypeaheadModule,
    SweetAlert2Module.forRoot(),
    NgbPaginationModule,
    NgbModalModule,
    NgbDropdownModule,
  ],
  providers:[]
})
export class InventarioModule {}
