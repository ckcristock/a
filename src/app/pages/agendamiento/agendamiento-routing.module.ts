import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AbrirAgendasComponent } from './abrir-agendas/abrir-agendas.component';
import { AgendasComponent } from './agendas/agendas.component';
import { VerAgendaComponent } from './agendas/ver-agenda/ver-agenda.component';
import { AsignacionCitasComponent } from './asignacion-citas/asignacion-citas.component';
import { IndicadoresGestionComponent } from './indicadores-gestion/indicadores-gestion.component';
import { ListaEsperaComponent } from './lista-espera/lista-espera.component';
import { ListaTrabajoComponent } from './lista-trabajo/lista-trabajo.component';
import { RecaudosComponent } from './recaudos/recaudos.component';
import { ReportesComponent } from './reportes/reportes.component';


const routes: Routes = [
    { path: 'abrir-agendas', component: AbrirAgendasComponent },
    { path: 'asignacion-citas/:id', component: AsignacionCitasComponent },
    { path: 'asignacion-citas', component: AsignacionCitasComponent },
    { path: 'lista-espera', component: ListaEsperaComponent },
    { path: 'lista-trabajo', component: ListaTrabajoComponent },
    { path: 'indicadores-gestion', component: IndicadoresGestionComponent },
    { path: 'reportes', component: ReportesComponent },
    { path: 'agendas', component: AgendasComponent },
    { path: 'recaudos', component: RecaudosComponent },
    { path: 'detalle-agenda/:id', component: VerAgendaComponent },
    { path: 'replay-migrate', loadChildren: () => import('./replay-migrate/replay-migrate.module').then(m => m.ReplayMigrateModule) }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AgendamientoRoutingModule { }
