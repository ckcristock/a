import { NgModule } from "@angular/core";
import { Routes, RouterModule } from '@angular/router';

import { CaracterizacionComponent } from './caracterizacion/caracterizacion.component';
import { KardexPatologiaComponent } from './kardex-patologia/kardex-patologia.component';


const routes: Routes = [
    { path: 'caracterizacion', component: CaracterizacionComponent },
    { path: 'kardex-patologia', component: KardexPatologiaComponent },
    { path: 'historia-clinica', loadChildren: () => import('./clinical-history/clinical-history.module').then(m => m.ClinicalHistoryModule) },
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class GestionRiesgoRoutingModule { }