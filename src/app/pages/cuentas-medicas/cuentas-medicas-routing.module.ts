import { NgModule } from "@angular/core";
import { Routes, RouterModule } from '@angular/router';
import { RadicacionComponent } from "./radicacion/radicacion.component";

const routes: Routes = [
  { path: 'radicacion', component: RadicacionComponent },
  {  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class CuentasMedicasRoutingModule { }
