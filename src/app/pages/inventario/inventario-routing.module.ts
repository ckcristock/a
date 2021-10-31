import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InventarioFisicoComponent } from './inventario-fisico/inventario-fisico.component';
import { InventarioComponent } from './inventario/inventario.component';
import { ActaRecepcionComponent } from './acta-recepcion/acta-recepcion.component';
import { CrearActaRecepcionComponent } from './acta-recepcion/crear-acta-recepcion/crear-acta-recepcion.component';

const routes: Routes = [
  { path: 'inventario', component: InventarioComponent },
  { path: 'inventario-fisico', component: InventarioFisicoComponent },
  { path: 'acta-recepcion', component: ActaRecepcionComponent },
  { path: 'acta-recepcion/crear/:codigo/:compra', component: CrearActaRecepcionComponent },
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InventarioRoutingModule {}
