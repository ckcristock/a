import { NgModule } from "@angular/core";
import { Routes, RouterModule } from '@angular/router';
import { PrestacionesSocialesComponent } from "../ajustes/informacion-base";
import { EstructuraEmpresaComponent } from './estructura-empresa.component';

const routes: Routes = [
  { path: 'gestion-estructure', component: EstructuraEmpresaComponent },
  { path: 'prestaciones-sociales', component: PrestacionesSocialesComponent },
  { path: 'turneros', loadChildren: () => import('../turnero/turnero.module').then(m => m.TurneroModule) }

]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})


export class StructureCompanyRoutingModule { }