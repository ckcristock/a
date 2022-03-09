import { CommonModule } from '@angular/common';
import { FormsModule, NgForm, ReactiveFormsModule } from '@angular/forms';

import { AgendamientoRoutingModule } from "./agendamiento-routing.module";
import { ComponentsModule } from "src/app/components/components.module";
import { ArchwizardModule } from "angular-archwizard";
import { NgSelectModule } from '@ng-select/ng-select';
import { NgbNavModule, NgbPaginationModule, NgbTypeaheadModule, NgbDropdownModule, NgbAlertModule, NgbDatepickerModule } from '@ng-bootstrap/ng-bootstrap';

import { AsignacionCitasModule } from './asignacion-citas/asignacion-citas.module';
import { AbrirAgendasComponent } from './abrir-agendas/abrir-agendas.component';
import { ListaTrabajoComponent } from './lista-trabajo/lista-trabajo.component';
import { ListaEsperaComponent } from './lista-espera/lista-espera.component';
import { IndicadoresGestionComponent } from './indicadores-gestion/indicadores-gestion.component';
import { ReportesComponent } from './reportes/reportes.component';
import { FullCalendarModule } from '@fullcalendar/angular';
import { TopWaitingComponent } from './lista-espera/top-waiting/top-waiting.component';
//import { ActaAplicacionComponent } from './pages/agendamiento/acta-aplicacion/acta-aplicacion.component';




import { NgModule } from "@angular/core";
import { CallendarComponent } from './callendar/callendar.component';
import { AgendasComponent } from './agendas/agendas.component';
import { VerAgendaComponent } from './agendas/ver-agenda/ver-agenda.component';
import { DetailStatsComponent } from './agendas/detail-stats/detail-stats.component';
import { PipesModule } from '../../core/pipes/pipes.module';
import { RecaudosComponent } from './recaudos/recaudos.component';
import { ReplayMigrateModule } from './replay-migrate/replay-migrate.module';
import { CallInComponent } from './call-in/call-in.component';
import { ActaAplicacionComponent } from './acta-aplicacion/acta-aplicacion.component';
//import { NgxDropzoneModule } from 'ngx-dropzone';



@NgModule({
    declarations: [
        AbrirAgendasComponent,
        ListaTrabajoComponent,
        ListaEsperaComponent,
        IndicadoresGestionComponent,
        ReportesComponent,
        CallendarComponent,
        TopWaitingComponent,
        AgendasComponent,
        VerAgendaComponent,
        DetailStatsComponent,
        RecaudosComponent,
        CallInComponent,
        ActaAplicacionComponent


    ],
    imports: [
        NgbNavModule,
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        FullCalendarModule,
        NgSelectModule,
        AgendamientoRoutingModule,
        ComponentsModule,
        ArchwizardModule,
        AsignacionCitasModule,
        NgbTypeaheadModule,
        NgbPaginationModule,
        NgbDropdownModule,
        NgbAlertModule,
        NgbDatepickerModule,
        PipesModule,
        ReplayMigrateModule
    ],

    bootstrap: [],

    exports: [],

})

export class AgendamientoModule { }
