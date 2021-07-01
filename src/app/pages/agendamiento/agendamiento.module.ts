import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { AgendamientoRoutingModule } from "./agendamiento-routing.module";
import { ComponentsModule } from "src/app/components/components.module";
import { ArchwizardModule } from "angular-archwizard";
import { NgSelectModule } from '@ng-select/ng-select';
import { NgbNavModule, NgbPaginationModule, NgbTypeaheadModule } from "@ng-bootstrap/ng-bootstrap";

import { AsignacionCitasModule } from './asignacion-citas/asignacion-citas.module';
import { AbrirAgendasComponent } from './abrir-agendas/abrir-agendas.component';
import { ListaTrabajoComponent } from './lista-trabajo/lista-trabajo.component';
import { ListaEsperaComponent } from './lista-espera/lista-espera.component';
import { IndicadoresGestionComponent } from './indicadores-gestion/indicadores-gestion.component';
import { ReportesComponent } from './reportes/reportes.component';
import { TopWaitingComponent } from './lista-espera/top-waiting/top-waiting.component';



@NgModule({
    declarations: [
        AbrirAgendasComponent,
        ListaTrabajoComponent,
        ListaEsperaComponent,
        IndicadoresGestionComponent,
        ReportesComponent,
        TopWaitingComponent,
      
    ],
    imports: [
        NgbNavModule,
        CommonModule,
        FormsModule,
        NgSelectModule,
        AgendamientoRoutingModule,
        ComponentsModule,
        ArchwizardModule,
        AsignacionCitasModule,
        NgbTypeaheadModule,
        NgbPaginationModule
    ],


})

export class AgendamientoModule { }