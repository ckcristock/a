import { NgModule } from "@angular/core";
import { Routes, RouterModule } from '@angular/router';

import { CaracterizacionComponent } from './caracterizacion/caracterizacion.component';
import { KardexPatologiaComponent } from './kardex-patologia/kardex-patologia.component';
import { VariableHightCostComponent } from "./variable-hight-cost/variable-hight-cost.component";


const routes: Routes = [
    { path: 'caracterizacion', component: CaracterizacionComponent },
    { path: 'kardex-patologia', component: KardexPatologiaComponent },
    { path: 'historia-clinica', loadChildren: () => import('./clinical-history/clinical-history.module').then(m => m.ClinicalHistoryModule) },
    { path: 'administracion-historia-clinica', loadChildren: () => import('./managment-clinical-history/managment-clinical-history.module').then(m => m.ManagmentClinicalHistoryModule) },
    { path: 'variables-hight-cost', component: VariableHightCostComponent },
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class GestionRiesgoRoutingModule { }