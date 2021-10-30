import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InventarioFisicoComponent } from './inventario-fisico/inventario-fisico.component';
import { InventarioComponent } from './inventario/inventario.component';

const routes: Routes = [
  { path: 'inventario', component: InventarioComponent },
  { path: 'inventario-fisico', component: InventarioFisicoComponent },
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InventarioRoutingModule {}
