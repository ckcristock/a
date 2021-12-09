import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PlanCuentasComponent } from './plan-cuentas/plan-cuentas.component';
import { CentroCostosComponent } from './centro-costos/centro-costos.component';
import { ActivosFijosComponent } from './activos-fijos/activos-fijos.component';
import { ActivosFijosCrearComponent } from './activos-fijos/activos-fijos-crear/activos-fijos-crear.component';
import { ActivosFijosVerComponent } from './activos-fijos/activos-fijos-ver/activos-fijos-ver.component';
import {CajasComponent} from './cajas/cajas.component';
import { CierresContablesComponent } from './cierres-contables/cierres-contables.component';
import { DepreciacionComponent } from './depreciacion/depreciacion.component';
import { TabladepreciacionesComponent } from './depreciacion/tabladepreciaciones/tabladepreciaciones.component';
import { EgresosComponent } from './comprobantes/egresos/egresos.component';

const routes: Routes = [
    { path: 'plan-cuentas', component: PlanCuentasComponent },
    { path: 'centro-costos', component: CentroCostosComponent },
    { path: 'activos-fijos', component: ActivosFijosComponent },
    { path: 'activos-fijos-crear', component: ActivosFijosCrearComponent },
    { path: 'crear', component: ActivosFijosCrearComponent },
    { path: 'ver', component: ActivosFijosVerComponent },
    { path: 'cajas', component: CajasComponent },
    { path: 'depreciacion', component: DepreciacionComponent },
    { path: 'depreciaciones', component: TabladepreciacionesComponent },
    { path: 'comprobantes', loadChildren : () => import('./comprobantes/comprobantes.module').then(m => m.ComprobantesModule )},
    { path: 'cierres-contables', component: CierresContablesComponent },
    { path: 'egresos', component: EgresosComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ContabilidadRoutingModule {}