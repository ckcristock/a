import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MediomagneticoagrupacioncrearComponent } from './mediosmagneticos/mediomagagrupadosesp/mediomagneticoagrupacioncrear/mediomagneticoagrupacioncrear.component';
import { MediosmagneticosComponent } from './mediosmagneticos/mediosmagneticos.component';
import { MediomagneticocrearComponent } from './mediosmagneticos/mediomagneticocrear/mediomagneticocrear.component';
import { MediomagagrupadosespComponent } from './mediosmagneticos/mediomagagrupadosesp/mediomagagrupadosesp.component';

const routes: Routes = [
  { path: 'mediosmagneticosespeciales', component: MediosmagneticosComponent },
  { path: 'medios-magneticos-crear', component: MediosmagneticosComponent },
  { path: 'mediosmagneticos/editar/:id', component: MediomagneticocrearComponent },
  { path: 'medios-magneticosespeciales-crear', component: MediomagneticoagrupacioncrearComponent },
  { path: 'medios-magneticosespeciales-editar/:id', component: MediomagneticocrearComponent },
  { path: 'agruparmediosmagneticos', component: MediomagagrupadosespComponent },
  { path: 'agruparmediosmagneticos-crear', component: MediomagneticoagrupacioncrearComponent },
  { path: 'agruparmediosmagneticos-editar/:id', component: MediomagneticoagrupacioncrearComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InformesdianRoutingModule { }
