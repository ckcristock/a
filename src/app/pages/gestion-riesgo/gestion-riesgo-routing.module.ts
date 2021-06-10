import { NgModule } from "@angular/core";
import { Routes, RouterModule } from '@angular/router';

import { CaracterizacionComponent } from './caracterizacion/caracterizacion.component';
import { KardexPatologiaComponent } from './kardex-patologia/kardex-patologia.component';
import { HistoriaClinicaComponent } from './historia-clinica/historia-clinica.component';


const routes:Routes = [
    {path:'caracterizacion', component : CaracterizacionComponent},
    {path:'kardex-patologia', component : KardexPatologiaComponent},
    {path:'historia-clinica', component : HistoriaClinicaComponent},
]

@NgModule({
    imports:[RouterModule.forChild(routes)],
    exports:[RouterModule]
})

export class GestionRiesgoRoutingModule{}