import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AjustarDocumentosComponent } from './inventario-fisico/ajustar-documentos/ajustar-documentos.component';
import { InventarioEstibaComponent } from './inventario-fisico/inventario-estiba/inventario-estiba.component';
import { InventarioEstibasComponent } from './inventario-fisico/inventario-estibas/inventario-estibas.component';
import { InventarioFisicoComponent } from './inventario-fisico/inventario-fisico.component';
import { ReconteoEstibaComponent } from './inventario-fisico/reconteo-estiba/reconteo-estiba.component';
import { VerInventarioComponent } from './inventario-fisico/ver-inventario/ver-inventario.component';
import { InventarioComponent } from './inventario/inventario.component';

const routes: Routes = [
  { path: 'inventario', component: InventarioComponent },
  { path: 'inventario-fisico', component: InventarioFisicoComponent },
  { path: 'inventario-estiba/:idInventarioEstiba', component: InventarioEstibaComponent },
  { path: 'inventario-estibas/:idInventarioEstiba', component: InventarioEstibasComponent },
  { path: 'reconteo-estiba/:idInventarioEstiba', component: ReconteoEstibaComponent },
  { path: 'ajuste-documentos/:idEstiba', component: AjustarDocumentosComponent },
  { path: 'inventariofisicoestibas/:idInventario', component: VerInventarioComponent },
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InventarioRoutingModule {}
