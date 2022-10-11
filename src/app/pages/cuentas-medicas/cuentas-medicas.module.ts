import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RadicacionComponent } from './radicacion/radicacion.component';
import { CuentasMedicasRoutingModule } from './cuentas-medicas-routing.module';
import { FacturaCapitaComponent } from './factura-capita/factura-capita.component';
import { FacturaLaboratorioComponent } from './factura-laboratorio/factura-laboratorio.component';
import { FacturaMedicamentosComponent } from './factura-medicamentos/factura-medicamentos.component';
import { FacturaPgpComponent } from './factura-pgp/factura-pgp.component';
import { ComponentsModule } from 'src/app/components/components.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TablaFacturacionComponent } from './factura-medicamentos/tabla-facturacion/tabla-facturacion.component';
import { NuevaFacturaCapitaComponent } from './factura-capita/nueva-factura-capita/nueva-factura-capita.component';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { DatePipe } from '@angular/common';
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
import { NgbDropdownModule, NgbPaginationModule, NgbTypeaheadModule } from "@ng-bootstrap/ng-bootstrap";
import { MatIconModule } from "@angular/material/icon";


@NgModule({
  imports: [
    CommonModule,
    CuentasMedicasRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    ComponentsModule,
    NgbDropdownModule,
    MatExpansionModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule,
    MatAutocompleteModule,
    MatDatepickerModule,
    MatNativeDateModule,
    SatDatepickerModule,
    SatNativeDateModule,
    NgbPaginationModule,
    NgbTypeaheadModule,
    MatIconModule
  ],
  declarations: [
    RadicacionComponent,
    FacturaCapitaComponent,
    FacturaLaboratorioComponent,
    FacturaMedicamentosComponent,
    FacturaPgpComponent,
    TablaFacturacionComponent,
    NuevaFacturaCapitaComponent
  ]
})
export class CuentasMedicasModule { }
