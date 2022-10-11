import { NgModule } from "@angular/core";
import { Routes, RouterModule } from '@angular/router';
import { FacturaCapitaComponent } from "./factura-capita/factura-capita.component";
import { NuevaFacturaCapitaComponent } from "./factura-capita/nueva-factura-capita/nueva-factura-capita.component";
import { FacturaLaboratorioComponent } from "./factura-laboratorio/factura-laboratorio.component";
import { FacturaMedicamentosComponent } from "./factura-medicamentos/factura-medicamentos.component";
import { FacturaPgpComponent } from "./factura-pgp/factura-pgp.component";
import { RadicacionComponent } from "./radicacion/radicacion.component";

const routes: Routes = [
  { path: 'radicacion', component: RadicacionComponent },
  { path: 'facturas-laboratorio', component: FacturaLaboratorioComponent },
  { path: 'facturas-medicamentos', component: FacturaMedicamentosComponent },
  { path: 'facturas-capita', component: FacturaCapitaComponent },
  { path: 'facturas-capita/nueva', component: NuevaFacturaCapitaComponent },
  { path: 'facturas-pgp', component: FacturaPgpComponent },
  {  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class CuentasMedicasRoutingModule { }
