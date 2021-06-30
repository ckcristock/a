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

import { NgSelectModule } from '@ng-select/ng-select';
import { AgendarCitasComponent } from './asignacion-citas/agendar-citas/agendar-citas.component';
import { CrearCitaComponent } from './asignacion-citas/agendar-citas/crear-cita/crear-cita.component';
import { AsignarCalendarioComponent } from './asignacion-citas/agendar-citas/asignar-calendario/asignar-calendario.component';
import { ComponentsModule } from "src/app/components/components.module";
import { ArchwizardModule } from "angular-archwizard";
import { TipificacionComponent } from "./asignacion-citas/tipificacion/tipificacion.component";
import { CitasComponent } from './asignacion-citas/citas/citas.component';


@NgModule({
    declarations: [AbrirAgendasComponent,
        AsignacionCitasComponent,
        ListaTrabajoComponent,
        ListaEsperaComponent,
        IndicadoresGestionComponent,
        ReportesComponent,
        AgendarCitasComponent,
        CrearCitaComponent,
        AsignarCalendarioComponent,
        TipificacionComponent,
        CitasComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        NgSelectModule,
        AgendamientoRoutingModule,
        ComponentsModule,
        ArchwizardModule,

    ],

})

export class AgendamientoModule { }