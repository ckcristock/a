import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NotasContablesComponent } from './notas-contables/notas-contables.component';
import { CrearNotaContableComponent } from './notas-contables/crear-nota-contable/crear-nota-contable.component';
import { EgresosComponent } from './egresos/egresos.component';
import { ComprobanteegresovarioscrearComponent } from './egresos/comprobanteegresovarioscrear/comprobanteegresovarioscrear.component';
import { ComprobanteingresocrearComponent } from './ingresos/comprobanteingresocrear/comprobanteingresocrear.component';
import { IngresosComponent } from './ingresos/ingresos.component';
import { NotasCarterasComponent } from './notas-carteras/notas-carteras.component';
import { NotascarteracrearComponent } from './notas-carteras/notascarteracrear/notascarteracrear.component';

const routes: Routes = [
    { path: 'notas-contables', component: NotasContablesComponent },
    { path: 'crear-nota-contable', component: CrearNotaContableComponent },
    { path: 'egresos', component: EgresosComponent },
    { path: 'comprobanteegresovarioscrear', component: ComprobanteegresovarioscrearComponent },
    { path: 'ingresos', component: IngresosComponent },
    { path: 'comprobanteingresocrear', component: ComprobanteingresocrearComponent },
    { path: 'notas-cartera', component: NotasCarterasComponent },
    { path: 'notas-cartera-crear', component: NotascarteracrearComponent }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ComprobantesRoutingModule {}
