import { NgModule } from '@angular/core';

import { MyDateRangePickerModule } from 'mydaterangepicker';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';


import { ComponentsModule } from '../../components/components.module';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';

import { NgbDropdown, NgbDropdownModule, NgbModalModule, NgbPaginationModule, NgbTypeaheadModule } from '@ng-bootstrap/ng-bootstrap';
import { InventarioRoutingModule } from './inventario-routing.module';
import { InventarioComponent } from './inventario/inventario.component';
import { HttpClientModule } from '@angular/common/http';
import { InventarioFisicoComponent } from './inventario-fisico/inventario-fisico.component';
import { ModalAlert, ModalformComponent } from './inventario-fisico/modalform/modalform.component';
import { ModaldataInitComponent } from './inventario-fisico/modaldata-init/modaldata-init.component';
import { InventarioEstibaComponent } from './inventario-fisico/inventario-estiba/inventario-estiba.component';
import { ListadoproductosyainventariadosestibaComponent } from './inventario-fisico/listadoproductosyainventariadosestiba/listadoproductosyainventariadosestiba.component';
import { InventarioEstibasComponent } from './inventario-fisico/inventario-estibas/inventario-estibas.component';
import { ReconteoEstibaComponent } from './inventario-fisico/reconteo-estiba/reconteo-estiba.component';
import { AjustarDocumentosComponent } from './inventario-fisico/ajustar-documentos/ajustar-documentos.component';
import { VerInventarioComponent } from './inventario-fisico/ver-inventario/ver-inventario.component';

@NgModule({
    declarations:[
      ModalAlert,
      ModalformComponent,
      ModaldataInitComponent,
      InventarioComponent, InventarioFisicoComponent, InventarioEstibaComponent, ListadoproductosyainventariadosestibaComponent, InventarioEstibasComponent, ReconteoEstibaComponent, AjustarDocumentosComponent, VerInventarioComponent],
    imports:[
        HttpClientModule,
        CommonModule,
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
})

export class InventarioModule{}
