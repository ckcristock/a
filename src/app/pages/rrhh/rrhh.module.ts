import { DEFAULT_CURRENCY_CODE, NgModule } from '@angular/core';
import { RrhhRouterModule } from './rrhh-routing.module';
import { VacantesComponent } from './vacantes/vacantes.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
/* import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2'; */

import {
  NgbPaginationModule,
  NgbDropdownModule,
  NgbTypeaheadModule,
  NgbNavModule,
} from '@ng-bootstrap/ng-bootstrap';
import { MyDateRangePickerModule } from 'mydaterangepicker';
import { VacantesCrearComponent } from './vacantes/vacantes-crear/vacantes-crear.component';
import { PipesModule } from '../../core/pipes/pipes.module';
import { CommonModule, CurrencyPipe } from '@angular/common';

import { LlegadasTardesComponent } from './llegadas-tardes/llegadas-tardes.component';

import { ChartsModule } from 'ng2-charts';
import { NovedadesComponent } from './novedades/novedades.component';
import { NgSelectModule } from '@ng-select/ng-select';
import { VacantesVerComponent } from './vacantes/vacantes-ver/vacantes-ver.component';
import { CrearNovedadComponent } from './novedades/crear-novedad/crear-novedad.component';
//import { InventarioDotacionComponent } from './dotacion/inventario-dotacion/inventario-dotacion.component';
//import { DotacionesComponent } from './dotacion/dotaciones/dotaciones.component';
import { ActividadesComponent } from './actividades/actividades.component';

import { FullCalendarModule } from '@fullcalendar/angular';
import { DetalleLlegadaComponent } from './llegadas-tardes/detalle-llegada/detalle-llegada.component';
import { ContratosComponent } from './contratos/contratos.component';
import { DisciplinariosComponent } from './procesos/disciplinarios/disciplinarios.component';
import { MemorandosComponent } from './procesos/memorandos/memorandos.component';
import { PreliquidadosComponent } from './preliquidados/preliquidados.component';
import { LiquidadosComponent } from './preliquidados/liquidados/liquidados.component';
import { AlertasComunComponent } from './alertas-comun/alertas-comun.component';
import { NgbTooltipModule } from '@ng-bootstrap/ng-bootstrap';
import { AsignacionTurnosComponent } from './asignacion-turnos/asignacion-turnos.component';
import { SemanaTurnoComponent } from './asignacion-turnos/semana-turno/semana-turno.component';
import { TurnoComponent } from './asignacion-turnos/semana-turno/turno/turno.component';
import { HorasExtrasComponent } from './horas-extras/horas-extras.component';
import { CertificadosComponent } from './certificados/certificados.component';
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { CesantiasComponent } from './certificados/cesantias/cesantias.component';
import { CertificadosListComponent } from './certificados/certificados-list/certificados-list.component';
import { ReporteHorarioComponent } from './reporte-horario/reporte-horario.component';
import { DetalleReporteComponent } from './reporte-horario/detalle-reporte/detalle-reporte.component';
import { DetalleHorarioComponent } from './reporte-horario/detalle-horario/detalle-horario.component';
import { NgbCollapseModule } from "@ng-bootstrap/ng-bootstrap";
import { FondoEmpleadoComponent } from './fondo-empleado/fondo-empleado.component';
import { DetalleHorarioRotativoComponent } from './reporte-horario/detalle-horario-rotativo/detalle-horario-rotativo.component';
import { AsignarHorasExtrasComponent } from './asignar-horas-extras/asignar-horas-extras.component';
import { SemanasExtrasComponent } from './asignar-horas-extras/semanas-extras/semanas-extras.component';
import { ListaFijosComponent } from './horas-extras/lista-fijos/lista-fijos.component';
import { FijoComponent } from './horas-extras/lista-fijos/fijo/fijo.component';
import { EditDiarioRotatingComponent } from './horas-extras/lista-fijos/edit-diario-rotating/edit-diario-rotating.component';
import { RotativoComponent } from './horas-extras/lista-fijos/rotativo/rotativo.component';
import { EditDiarioFixedComponent } from './horas-extras/lista-fijos/edit-diario-fixed/edit-diario-fixed.component';
import { AlmuerzosComponent } from './almuerzos/almuerzos.component';
import { InventarioDotacionComponent } from './dotacion/inventario-dotacion/inventario-dotacion.component';
import { DotacionEntradasComponent } from './dotacion/dotaciones/dotacion-entradas/dotacion-entradas.component';
import { DotacionSalidasComponent } from './dotacion/dotaciones/dotacion-salidas/dotacion-salidas.component';
import { DotacionesComponent } from './dotacion/dotaciones/dotaciones.component';
import { TableStockComponent } from './dotacion/dotaciones/table-stock/table-stock.component';
import { ComponentsModule } from 'src/app/components/components.module';
import { TableInventaryComponent } from './dotacion/dotaciones/table-inventary/table-inventary.component';
import { CategoryStockComponent } from './dotacion/dotaciones/category-stock/category-stock.component';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { NgxMatSelectSearchModule } from 'ngx-mat-select-search';
import { SearchPipe } from './search.pipe';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE, SatDatepickerModule, SatNativeDateModule } from 'saturn-datepicker';
import { MomentDateAdapter } from '@angular/material-moment-adapter';
export const MY_FORMATS = {
  parse: {
    dateInput: 'DD/MM/YYYY'
  },
  display: {
    dateInput: 'DD/MM/YYYY',
    monthYearLabel: 'MMM YYYY',
    dateA11yLabel: 'LL',
    monthYearA11yLabel: 'MMMM YYYY'
  }
};
@NgModule({
  declarations: [
    VacantesComponent,
    ActividadesComponent,
    VacantesCrearComponent,
    LlegadasTardesComponent,
    NovedadesComponent,
    VacantesVerComponent,
    CrearNovedadComponent,
    //InventarioDotacionComponent,
    //DotacionesComponent,
    InventarioDotacionComponent,
    DotacionEntradasComponent,
    DotacionSalidasComponent,
    DotacionesComponent,

    AsignacionTurnosComponent,
    SemanaTurnoComponent,
    TurnoComponent,
    HorasExtrasComponent,
    DetalleLlegadaComponent,
    ContratosComponent,
    DisciplinariosComponent,
    MemorandosComponent,
    PreliquidadosComponent,
    LiquidadosComponent,
    AlertasComunComponent,
    CertificadosComponent,
    CesantiasComponent,
    CertificadosListComponent,
    ReporteHorarioComponent,
    DetalleReporteComponent,
    DetalleHorarioComponent,
    FondoEmpleadoComponent,
    DetalleHorarioRotativoComponent,
    AsignarHorasExtrasComponent,
    SemanasExtrasComponent,
    ListaFijosComponent,
    FijoComponent,
    RotativoComponent,
    EditDiarioRotatingComponent,
    EditDiarioFixedComponent,
    AlmuerzosComponent,
    TableStockComponent,
    TableInventaryComponent,
    CategoryStockComponent,
    SearchPipe
  ],
  imports: [
    RrhhRouterModule,
    CommonModule,
    ChartsModule,
    FormsModule,
    ReactiveFormsModule,
    /* SweetAlert2Module, */
    NgbPaginationModule,
    NgbCollapseModule,
    NgbDropdownModule,
    NgbTypeaheadModule,
    NgbTooltipModule,
    MyDateRangePickerModule,
    PipesModule,
    ComponentsModule,
    NgSelectModule,
    FullCalendarModule,
    PerfectScrollbarModule,
    NgbNavModule,
    MatExpansionModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    NgxMatSelectSearchModule,
    MatAutocompleteModule,
    MatIconModule,
    MatButtonModule,
    SatDatepickerModule,
    SatNativeDateModule,
  ],
  providers: [
    {
      provide: DEFAULT_CURRENCY_CODE,
      useValue: 'COP'
    },
    CurrencyPipe,
    {
      provide: DateAdapter,
      useClass: MomentDateAdapter,
      deps: [MAT_DATE_LOCALE],
    },
    {
      provide: MAT_DATE_FORMATS,
      useValue: MY_FORMATS
    }
  ],
  exports: [],
})
export class RrhhModule { }
