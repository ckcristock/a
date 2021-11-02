import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from '../core/guards/auth.guard';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ComprasModule } from './compras/compras.module';

const routes: Routes = [
    { path: '', component: DashboardComponent },
    {
        path: 'agendamiento',
        loadChildren: () => import('./agendamiento/agendamiento.module').then(m => m.AgendamientoModule)
    },
    { path: 'gestion-riesgo', loadChildren: () => import('./gestion-riesgo/gestion-riesgo.module').then(m => m.GestionRiesgoModule) },
    { path: 'sst', loadChildren: () => import('./sst/sst.module').then(m => m.SstModule) },
    { path: 'ajustes', loadChildren: () => import('./ajustes/ajustes.module').then(m => m.AjustesModule) },
    { path: 'compras', loadChildren: () => import('./compras/compras.module').then(m => m.ComprasModule) },

    /**
     * Nueva integracion con core
     */

    { path: 'rrhh',   loadChildren : () => import('./rrhh/rrhh.module').then(m => m.RrhhModule )},
    { path: 'contabilidad',   loadChildren : () => import('./contabilidad/contabilidad.module').then(m => m.ContabilidadModule )},
    { path: 'nomina',   loadChildren : () => import('./nomina/nomina.module').then(m => m.NominaModule )},
    { path: 'crm',   loadChildren : () => import('./crm/crm.module').then(m => m.CrmModule )},



];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class PagesRoutingModule { }
