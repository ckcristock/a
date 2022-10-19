import { NgModule } from "@angular/core";
import { Routes, RouterModule } from '@angular/router';
import { TiposContratoComponent } from './tipos-contrato/tipos-contrato.component';
import { TiposSalarioComponent } from './tipos-salario/tipos-salario.component';
import { TiposDocumentoComponent } from './tipos-documento/tipos-documento.component';
import { TiposRiesgoComponent } from './tipos-riesgo/tipos-riesgo.component';
import { TiposNovedadesComponent } from "./tipos-novedades/tipos-novedades.component";
import { TiposEgresoComponent } from './tipos-egreso/tipos-egreso.component';
import { TiposIngresoComponent } from './tipos-ingreso/tipos-ingreso.component';
import { ProfesionesComponent } from './profesiones/profesiones.component';
// import { TiposActivoFijoComponent } from './tipos-activo-fijo/tipos-activo-fijo.component';
import { TiposRetencionesComponent } from './tipos-retenciones/tipos-retenciones.component';
import { TiposVisaComponent } from './tipos-visa/tipos-visa.component';
import { TipoactivofijoComponent } from './tipoactivofijo/tipoactivofijo.component';
import { ContratoComponent } from "./contrato/contrato.component";


const routes : Routes = [
    { path: 'tipos-contrato' , component: TiposContratoComponent },
    { path: 'contrato' , component: ContratoComponent },
    { path: 'tipos-salario' , component: TiposSalarioComponent },
    { path: 'tipos-documento' , component: TiposDocumentoComponent },
    { path: 'tipos-riesgo' , component: TiposRiesgoComponent },
    { path: 'tipos-novedad' , component: TiposNovedadesComponent },
    { path: 'tipos-egreso' , component: TiposEgresoComponent },
    { path: 'tipos-ingreso' , component: TiposIngresoComponent },
    { path: 'profesiones' , component: ProfesionesComponent },
    { path: 'tipos-activo-fijo' , component: TipoactivofijoComponent },
    { path: 'tipos-retenciones' , component: TiposRetencionesComponent },
    { path: 'tipos-visa' , component: TiposVisaComponent },
]

@NgModule({
    imports : [RouterModule.forChild(routes)],
    exports : [RouterModule]
})

export class TiposRoutingModule{}