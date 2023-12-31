import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ConfiguracionEmpresaComponent } from './configuracion-empresa/configuracion-empresa.component';
import { CamposTercerosComponent } from './campos-terceros/campos-terceros.component';
import { NominaComponent } from './nomina/nomina.component';
import { FormatoHistoriaComponent } from './formato-historia/formato-historia.component';
import {ContabilidadComponent} from './contabilidad/contabilidad.component';
import { LocalidadesComponent } from './localidades/localidades.component';

const routes: Routes = [
  { path: 'configuracion-empresa', component: ConfiguracionEmpresaComponent },
  { path: 'configuracion-empresa/:id/:value', component: ConfiguracionEmpresaComponent },
  /* { path: 'campos-terceros', component: CamposTercerosComponent }, */
  { path: 'configuracion-nomina', component: NominaComponent },
  { path: 'formato-historia', component: FormatoHistoriaComponent },
  { path: 'contabilidad', component: ContabilidadComponent },
  { path: 'localidades', component: LocalidadesComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ConfiguracionRoutingModule {}
