import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DetalleNominaElectronicaComponent } from './detalle-nomina-electronica/detalle-nomina-electronica.component';
import { NominaElectronicaRoutingModule } from './nomina-electronica-routing.module';

@NgModule({
  declarations: [DetalleNominaElectronicaComponent],
  imports: [CommonModule, FormsModule, NominaElectronicaRoutingModule],
  exports: [],
})
export class NominaElectronicaModule {}
