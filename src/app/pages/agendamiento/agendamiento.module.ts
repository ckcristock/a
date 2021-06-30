import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { AgendamientoRoutingModule } from "./agendamiento-routing.module";
import { ComponentsModule } from "src/app/components/components.module";
import { ArchwizardModule } from "angular-archwizard";
import { NgSelectModule } from '@ng-select/ng-select';
import { NgbNavModule } from "@ng-bootstrap/ng-bootstrap";

import { AsignacionCitasModule } from './asignacion-citas/asignacion-citas.module';
import { AbrirAgendasComponent } from './abrir-agendas/abrir-agendas.component';
import { ListaTrabajoComponent } from './lista-trabajo/lista-trabajo.component';
import { ListaEsperaComponent } from './lista-espera/lista-espera.component';
import { IndicadoresGestionComponent } from './indicadores-gestion/indicadores-gestion.component';
import { ReportesComponent } from './reportes/reportes.component';



@NgModule({
    declarations: [
        AbrirAgendasComponent,
        ListaTrabajoComponent,
        ListaEsperaComponent,
        IndicadoresGestionComponent,
        ReportesComponent,
      
    ],
    imports: [
        NgbNavModule,
        CommonModule,
        FormsModule,
        NgSelectModule,
        AgendamientoRoutingModule,
        ComponentsModule,
        ArchwizardModule,
        AsignacionCitasModule
    ],


})

export class AgendamientoModule { }