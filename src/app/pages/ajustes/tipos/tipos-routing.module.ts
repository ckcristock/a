import { NgModule } from "@angular/core";
import { Routes, RouterModule } from '@angular/router';
import { TiposRiesgoComponent } from './tipos-riesgo/tipos-riesgo.component';
import { TiposNovedadesComponent } from "./tipos-novedades/tipos-novedades.component";
import { TiposEgresoComponent } from './tipos-egreso/tipos-egreso.component';
import { TiposIngresoComponent } from './tipos-ingreso/tipos-ingreso.component';
import { TiposRetencionesComponent } from './tipos-retenciones/tipos-retenciones.component';
import { TipoactivofijoComponent } from './tipoactivofijo/tipoactivofijo.component';
import { ContratoComponent } from "./contrato/contrato.component";


const routes : Routes = [
    { path: 'contrato' , component: ContratoComponent },
    { path: 'tipos-riesgo' , component: TiposRiesgoComponent },
    { path: 'tipos-novedad' , component: TiposNovedadesComponent },
    { path: 'tipos-egreso' , component: TiposEgresoComponent },
    { path: 'tipos-ingreso' , component: TiposIngresoComponent },
    { path: 'tipos-activo-fijo' , component: TipoactivofijoComponent },
    { path: 'tipos-retenciones' , component: TiposRetencionesComponent },
]

@NgModule({
    imports : [RouterModule.forChild(routes)],
    exports : [RouterModule]
})

export class TiposRoutingModule{}