import { NgModule } from "@angular/core";
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { ComponentsModule } from "src/app/components/components.module";
import { ArchwizardModule } from "angular-archwizard";
import { NgSelectModule } from '@ng-select/ng-select';


import { AgendarCitasComponent } from './agendar-citas/agendar-citas.component';
import { CrearCitaComponent } from './agendar-citas/crear-cita/crear-cita.component';
import { AsignarCalendarioComponent } from './agendar-citas/asignar-calendario/asignar-calendario.component';
import { TipificacionComponent } from "./tipificacion/tipificacion.component";
import { CitasComponent } from './citas/citas.component';
import { NgbNavModule } from "@ng-bootstrap/ng-bootstrap";
import { AsignacionCitasComponent } from './asignacion-citas.component';
import { ResumenCitasComponent } from './resumen-citas/resumen-citas.component';


@NgModule({
    declarations: [
        AgendarCitasComponent,
        CrearCitaComponent,
        AsignarCalendarioComponent,
        TipificacionComponent,
        CitasComponent,
        AsignacionCitasComponent,
        ResumenCitasComponent
    ],
    imports: [
        NgbNavModule,
        FormsModule,
        NgSelectModule,
        ComponentsModule,
        ArchwizardModule,
        CommonModule
    ],
    exports:[
        AgendarCitasComponent,
        CrearCitaComponent,
        AsignarCalendarioComponent,
        TipificacionComponent,
        CitasComponent,
        AsignacionCitasComponent
    ]
})

export class AsignacionCitasModule { }