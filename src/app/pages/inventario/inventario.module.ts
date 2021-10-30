import { NgModule } from '@angular/core';

import { MyDateRangePickerModule } from 'mydaterangepicker';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';


import { ComponentsModule } from '../../components/components.module';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';

import { NgbPaginationModule, NgbTypeaheadModule } from '@ng-bootstrap/ng-bootstrap';
import { InventarioRoutingModule } from './inventario-routing.module';
import { InventarioComponent } from './inventario/inventario.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
    declarations:[InventarioComponent],
    imports:[
       HttpClientModule,
        CommonModule,
        FormsModule,
        InventarioRoutingModule,
        ComponentsModule,
        MyDateRangePickerModule,
        NgbTypeaheadModule,
        SweetAlert2Module.forRoot(),
        NgbPaginationModule

    ],
})

export class InventarioModule{}
