import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotasContablesComponent } from './notas-contables/notas-contables.component';
import {
  NgbDropdownModule,
  NgbPaginationModule,
  NgbTypeaheadModule,
} from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgSelectModule } from '@ng-select/ng-select';
import { ComponentsModule } from '../../../components/components.module';
import { CrearNotaContableComponent } from './notas-contables/crear-nota-contable/crear-nota-contable.component';
import { ComprobantesRoutingModule } from './comprobantes-routing.module';
import { MyDateRangePickerModule } from 'mydaterangepicker';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';
import { BorradorcomprobantesComponent } from './borradorcomprobantes/borradorcomprobantes.component';
import { EgresosComponent } from './egresos/egresos.component';
import { ComprobanteegresovarioscrearComponent } from './egresos/comprobanteegresovarioscrear/comprobanteegresovarioscrear.component';
import { IngresosComponent } from './ingresos/ingresos.component';
import { ComprobanteingresocrearComponent } from './ingresos/comprobanteingresocrear/comprobanteingresocrear.component';
import { TablafacturafaltanteComponent } from './ingresos/comprobanteingresocrear/tablafacturafaltante/tablafacturafaltante.component';
import { TablafacturascargadasComponent } from './ingresos/comprobanteingresocrear/tablafacturascargadas/tablafacturascargadas.component';
import { NotasCarterasComponent } from './notas-carteras/notas-carteras.component';
import { NotascarteracrearComponent } from './notas-carteras/notascarteracrear/notascarteracrear.component';
import { NotascreditoComponent } from './notascredito/notascredito.component';
import { NotascreditocrearComponent } from './notascredito/notascreditocrear/notascreditocrear.component';
import { NotascreditoverComponent } from './notascredito/notascreditover/notascreditover.component';
import { Globales } from '../globales';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { SatDatepickerModule, SatNativeDateModule } from 'saturn-datepicker';
import {
  DateAdapter,
  MAT_DATE_FORMATS,
  MAT_DATE_LOCALE,
} from 'saturn-datepicker';
import {
  MAT_MOMENT_DATE_FORMATS,
  MomentDateAdapter,
} from '@angular/material-moment-adapter';
import { SharedModule } from 'src/app/shared/shared.module';

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
    NotasContablesComponent,
    CrearNotaContableComponent,
    BorradorcomprobantesComponent,
    EgresosComponent,
    ComprobanteegresovarioscrearComponent,
    IngresosComponent,
    ComprobanteingresocrearComponent,
    TablafacturafaltanteComponent,
    TablafacturascargadasComponent,
    IngresosComponent,
    NotasCarterasComponent,
    NotascarteracrearComponent,
    NotascreditoComponent,
    NotascreditocrearComponent,
    NotascreditoverComponent,
  ],
  imports: [
    CommonModule,
    NgbDropdownModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgbPaginationModule,
    NgSelectModule,
    ComponentsModule,
    ComprobantesRoutingModule,
    NgbTypeaheadModule,
    MyDateRangePickerModule,
    MatExpansionModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule,
    SatDatepickerModule,
    SatNativeDateModule,
    SweetAlert2Module.forRoot(),
  ],
  providers: [
    Globales,
    {
      provide: DateAdapter,
      useClass: MomentDateAdapter,
      deps: [MAT_DATE_LOCALE],
    },
    { provide: MAT_DATE_FORMATS, useValue: MY_FORMATS },
  ],
})
export class ComprobantesModule {}
