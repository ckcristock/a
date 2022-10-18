import { NgModule } from "@angular/core";
import { Routes, RouterModule } from '@angular/router';
import { RadicacionComponent } from "./radicacion/radicacion.component";
import { FormularioRadicacionComponent } from "./radicacion/formulario-radicacion/formulario-radicacion.component";

const routes: Routes = [
  { path: 'radicacion', component: RadicacionComponent },
  { path: 'radicacion/formulario', component: FormularioRadicacionComponent },
  {  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class CuentasMedicasRoutingModule { }
