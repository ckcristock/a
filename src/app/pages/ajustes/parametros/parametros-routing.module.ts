import { NgModule } from "@angular/core";
import { Routes, RouterModule } from '@angular/router';
import { EpsComponent } from "./eps/eps.component";
import { DepartamentosComponent } from "./departamentos/departamentos.component";
import { BancosComponent } from './bancos/bancos.component';
import { CuentasBancariasComponent } from "./cuentas-bancarias/cuentas-bancarias.component";
import { CategoriasComponent } from "./categorias/categorias.component";
import { SubcategoriasComponent } from "./subcategorias/subcategorias.component";
import { AgendamientoComponent } from "./agendamiento/agendamiento.component";
import { NominaComponent } from "./nomina/nomina.component";


const routes : Routes = [
    { path: 'nomina', component:  NominaComponent},
    { path: 'departamentos', component : DepartamentosComponent },
    { path: 'cuentas-bancarias', component : CuentasBancariasComponent },
    { path: 'categorias', component : CategoriasComponent },
    { path: 'subcategorias', component : SubcategoriasComponent },
    { path: 'agendamiento', component : AgendamientoComponent },
]


@NgModule({
    imports:[RouterModule.forChild(routes)],
    exports:[RouterModule]
})

export class ParametrosRoutingModule {}
