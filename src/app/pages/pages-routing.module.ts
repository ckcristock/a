import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from '../core/guards/auth.guard';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [
    { path: '', component: DashboardComponent },
    {
        path: 'agendamiento',
        loadChildren: () => import('./agendamiento/agendamiento.module').then(m => m.AgendamientoModule)
    },
    { path: 'gestion-riesgo', loadChildren: () => import('./gestion-riesgo/gestion-riesgo.module').then(m => m.GestionRiesgoModule) },
    { path: 'sst', loadChildren: () => import('./sst/sst.module').then(m => m.SstModule) },
    { path: 'ajustes', loadChildren: () => import('./ajustes/ajustes.module').then(m => m.AjustesModule) },

];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class PagesRoutingModule { }
