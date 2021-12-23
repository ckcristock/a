import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DetalleNominaElectronicaComponent } from './detalle-nomina-electronica/detalle-nomina-electronica.component';
import { NominaElectronicaRoutingModule } from './nomina-electronica-routing.module';
import { PipesModule } from '../../../core/pipes/pipes.module';
import { HistoricoNominaElectronicaComponent } from './historico-nomina-electronica/historico-nomina-electronica.component';
import { ComponentsModule } from '../../../components/components.module';

@NgModule({
  declarations: [
    DetalleNominaElectronicaComponent,
    HistoricoNominaElectronicaComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    NominaElectronicaRoutingModule,
    PipesModule,
    ComponentsModule,
  ],
  exports: [],
})
export class NominaElectronicaModule {}
