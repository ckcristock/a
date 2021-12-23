import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DetalleNominaElectronicaComponent } from './detalle-nomina-electronica/detalle-nomina-electronica.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'historial/:id',
    component: DetalleNominaElectronicaComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NominaElectronicaRoutingModule {}
