import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { AgendamientoRoutingModule } from "./agendamiento-routing.module";
import { AbrirAgendasComponent } from './abrir-agendas/abrir-agendas.component';
import { AsignacionCitasComponent } from './asignacion-citas/asignacion-citas.component';
import { ListaTrabajoComponent } from './lista-trabajo/lista-trabajo.component';
import { ListaEsperaComponent } from './lista-espera/lista-espera.component';
import { IndicadoresGestionComponent } from './indicadores-gestion/indicadores-gestion.component';
import { ReportesComponent } from './reportes/reportes.component';


@NgModule({
    declarations:[AbrirAgendasComponent, AsignacionCitasComponent, ListaTrabajoComponent, ListaEsperaComponent, IndicadoresGestionComponent, ReportesComponent],
    imports:[
        CommonModule,
        FormsModule,
        AgendamientoRoutingModule
    ],

})

export class AgendamientoModule { }