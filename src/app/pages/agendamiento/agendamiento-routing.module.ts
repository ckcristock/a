import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AbrirAgendasComponent } from './abrir-agendas/abrir-agendas.component';
import { AsignacionCitasComponent } from './asignacion-citas/asignacion-citas.component';
import { IndicadoresGestionComponent } from './indicadores-gestion/indicadores-gestion.component';
import { ListaEsperaComponent } from './lista-espera/lista-espera.component';
import { ListaTrabajoComponent } from './lista-trabajo/lista-trabajo.component';
import { ReportesComponent } from './reportes/reportes.component';


const routes: Routes = [
    { path: 'abrir-agendas', component: AbrirAgendasComponent },
    { path: 'asignacion-citas', component: AsignacionCitasComponent },
    { path: 'lista-espera', component: ListaEsperaComponent },
    { path: 'lista-trabajo', component: ListaTrabajoComponent },
    { path: 'indicadores-gestion', component: IndicadoresGestionComponent },
    { path: 'reportes', component: ReportesComponent },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AgendamientoRoutingModule { }
