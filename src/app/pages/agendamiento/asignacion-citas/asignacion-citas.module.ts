import { NgModule } from "@angular/core";
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { ComponentsModule } from "src/app/components/components.module";
import { ArchwizardModule } from "angular-archwizard";
import { NgSelectModule } from '@ng-select/ng-select';
import { AgendarCitasComponent } from './agendar-citas-panel/agendar-citas.component';
import { CrearCitaComponent } from './agendar-citas-panel/crear-cita/crear-cita.component';
import { AsignarCalendarioComponent } from './agendar-citas-panel/asignar-calendario/asignar-calendario.component';
import { TipificacionComponent } from "./tipificacion/tipificacion.component";
import { CitasComponent } from './historial-citas/citas.component';
import { NgbModule, NgbNavModule } from "@ng-bootstrap/ng-bootstrap";
import { AsignacionCitasComponent } from './asignacion-citas.component';
import { ResumenCitasComponent } from './resumen-citas/resumen-citas.component';
import { CitaComponent } from "./disponibilidad-cita/cita.component";
import { FullCalendarModule } from '@fullcalendar/angular';
import { ResumenComponent } from './agendar-citas-panel/resumen/resumen.component';
import { OtroConceptoComponent } from './otro-concepto/otro-concepto.component';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { SearchPipe } from "./search.pipe";

@NgModule({
    declarations: [
        AgendarCitasComponent,
        CrearCitaComponent,
        AsignarCalendarioComponent,
        TipificacionComponent,
        AsignacionCitasComponent,
        ResumenCitasComponent,
        CitaComponent,
        CitasComponent,
        ResumenComponent,
        OtroConceptoComponent,
        SearchPipe
    ],
    imports: [
        NgbNavModule,
        FormsModule,
        NgSelectModule,
        ComponentsModule,
        ArchwizardModule,
        CommonModule,
        FullCalendarModule,
        NgbModule,
        MatExpansionModule,
        MatFormFieldModule,
        MatInputModule,
        MatSelectModule,

    ],
    exports: [
        AgendarCitasComponent,
        CrearCitaComponent,
        AsignarCalendarioComponent,
        TipificacionComponent,
        CitasComponent,
        CitaComponent,
        AsignacionCitasComponent,

    ]
})

export class AsignacionCitasModule { }