import { NgModule } from "@angular/core";
import { TiposRoutingModule } from "./tipos-routing.module";
import { TiposAgendaComponent } from './tipos-agenda/tipos-agenda.component';
import { TiposConsultaComponent } from './tipos-consulta/tipos-consulta.component';
import { TiposContratoComponent } from './tipos-contrato/tipos-contrato.component';
import { TiposSalarioComponent } from './tipos-salario/tipos-salario.component';
import { TiposDocumentoComponent } from './tipos-documento/tipos-documento.component';
import { ComponentsModule } from '../../../components/components.module';
import { NgbDropdownModule, NgbPaginationModule, NgbTypeaheadModule } from '@ng-bootstrap/ng-bootstrap';
import { CommonModule } from "@angular/common";
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PipesModule } from '../../../core/pipes/pipes.module';
import { TiposNovedadesComponent } from './tipos-novedades/tipos-novedades.component';
import { TiposGlosaComponent } from './tipos-glosa/tipos-glosa.component';
import { TiposRetencionesComponent } from './tipos-retenciones/tipos-retenciones.component';
import { TiposEgresoComponent } from './tipos-egreso/tipos-egreso.component';
import { TiposIngresoComponent } from './tipos-ingreso/tipos-ingreso.component';
import { TiposEstadoFinancieroComponent } from './tipos-estado-financiero/tipos-estado-financiero.component';
import { TiposAnulacionComponent } from './tipos-anulacion/tipos-anulacion.component';
import { TiposRechazoComponent } from './tipos-rechazo/tipos-rechazo.component';
// import { TiposActivoFijoComponent } from './tipos-activo-fijo/tipos-activo-fijo.component';
import { NgSelectModule } from '@ng-select/ng-select';
import { TiposRiesgoComponent } from './tipos-riesgo/tipos-riesgo.component';
import { ProfesionesComponent } from './profesiones/profesiones.component';
import { TiposVisaComponent } from './tipos-visa/tipos-visa.component';
import { TipoactivofijoComponent } from './tipoactivofijo/tipoactivofijo.component';
import { TablatipoactivofijoComponent } from './tipoactivofijo/tablatipoactivofijo/tablatipoactivofijo.component';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { ContratoComponent } from './contrato/contrato.component';
import { TiposTerminoComponent } from './tipos-termino/tipos-termino.component';

@NgModule({
    declarations: [
        TiposAgendaComponent,
        TiposConsultaComponent,
        TiposContratoComponent,
        TiposSalarioComponent,
        TiposDocumentoComponent,
        TiposNovedadesComponent,
        TiposGlosaComponent,
        TiposRetencionesComponent,
        TiposEgresoComponent,
        TiposIngresoComponent,
        TiposEstadoFinancieroComponent,
        TiposAnulacionComponent,
        TiposRechazoComponent,
        // TiposActivoFijoComponent,
        TiposRiesgoComponent,
        ProfesionesComponent,
        TiposVisaComponent,
        TipoactivofijoComponent,
        TablatipoactivofijoComponent,
        ContratoComponent,
        TiposTerminoComponent
    ],
    imports: [
        TiposRoutingModule,
        ComponentsModule,
        NgbDropdownModule,
        CommonModule,
        HttpClientModule,
        FormsModule,
        ReactiveFormsModule,
        PipesModule,
        NgbPaginationModule,
        NgSelectModule,
        NgbTypeaheadModule,
        MatExpansionModule,
        MatFormFieldModule,
        MatInputModule,
        MatSelectModule,
        SweetAlert2Module.forRoot()
    ],
    exports: [
        TiposAgendaComponent,
        TiposConsultaComponent
    ]
})

export class TiposModule { }