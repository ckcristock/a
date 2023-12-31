import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NominaRoutingModule } from './nomina-routing.module';
import { PrestamosLibranzasComponent } from './prestamos-libranzas/prestamos-libranzas.component';
import { ModalprestamoylibranzacrearComponent } from './prestamos-libranzas/modalprestamoylibranzacrear/modalprestamoylibranzacrear.component';
import { ComponentsModule } from '../../components/components.module';
import {
  NgbDropdownModule,
  NgbTypeaheadModule,
} from '@ng-bootstrap/ng-bootstrap';
import { PipesModule } from 'src/app/core/pipes/pipes.module';

import { ViaticosComponent } from './viaticos/viaticos.component';
import { CrearViaticosComponent } from './viaticos/crear-viaticos/crear-viaticos.component';
import {
  NgbPaginationModule,
  NgbTooltipModule,
} from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';
import { NgSelectModule } from '@ng-select/ng-select';
import { VerViaticosComponent } from './viaticos/ver-viaticos/ver-viaticos.component';
import { TransporteTerrestreComponent } from './viaticos/ver-viaticos/transporte-terrestre/transporte-terrestre.component';
import { HospedajeComponent } from './viaticos/ver-viaticos/hospedaje/hospedaje.component';
import { ViaticosTotalesComponent } from './viaticos/ver-viaticos/viaticos-totales/viaticos-totales.component';
import { ViaticosAlimentacionComponent } from './viaticos/ver-viaticos/viaticos-alimentacion/viaticos-alimentacion.component';
import { ViaticosViajeComponent } from './viaticos/ver-viaticos/viaticos-viaje/viaticos-viaje.component';
import { ViaticosTaxisComponent } from './viaticos/ver-viaticos/viaticos-taxis/viaticos-taxis.component';
import { EditarViaticoComponent } from './viaticos/editar-viatico/editar-viatico.component';
import { VacacionesComponent } from './vacaciones/vacaciones.component';
import { PrimasComponent } from './primas/primas.component';
import { PrimaFuncionarioComponent } from './primas/prima-funcionario/prima-funcionario.component';
import { HistorialPagosComponent } from './historial-pagos/historial-pagos.component';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
@NgModule({
  imports: [
    NominaRoutingModule,
    ComponentsModule,
    CommonModule,
    FormsModule,
    NgbTypeaheadModule,
    PipesModule,
    NgbDropdownModule,
    ReactiveFormsModule,
    NgbPaginationModule,
    HttpClientModule,
    NgSelectModule,
    NgbTypeaheadModule,
    NgbTooltipModule,
    MatExpansionModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule,
    MatIconModule
  ],
  declarations: [
    PrestamosLibranzasComponent,
    ModalprestamoylibranzacrearComponent,
    ViaticosComponent,
    CrearViaticosComponent,
    VerViaticosComponent,
    TransporteTerrestreComponent,
    HospedajeComponent,
    ViaticosTotalesComponent,
    ViaticosAlimentacionComponent,
    ViaticosViajeComponent,
    ViaticosTaxisComponent,
    EditarViaticoComponent,
    VacacionesComponent,
    PrimasComponent,
    PrimaFuncionarioComponent,
    HistorialPagosComponent,
  ],
})
export class NominaModule {}
