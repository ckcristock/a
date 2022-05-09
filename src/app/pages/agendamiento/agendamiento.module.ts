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
import { SearchPipe } from './search.pipe';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatSliderModule } from '@angular/material/slider';
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
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { ActaAplicacionComponent } from './acta-aplicacion/acta-aplicacion.component';
import { HttpClientModule } from '@angular/common/http';
import { ListaActaAplicacionComponent } from './lista-acta-aplicacion/lista-acta-aplicacion.component';




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
        SearchPipe,
        ActaAplicacionComponent,
        ListaActaAplicacionComponent


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
        ReplayMigrateModule,
        MatExpansionModule,
        MatFormFieldModule,
        MatInputModule,
        MatSelectModule,
        MatSlideToggleModule,
        MatSliderModule,
        HttpClientModule
    ],

    bootstrap: [],

    exports: [],

})

export class AgendamientoModule { }
