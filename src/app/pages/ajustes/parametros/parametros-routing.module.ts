import { NgModule } from "@angular/core";
import { Routes, RouterModule } from '@angular/router';
import { PerfilesComponent } from './perfiles/perfiles.component';
import { RgpComponent } from './rgp/rgp.component';
import { NotasTecnicasComponent } from './notas-tecnicas/notas-tecnicas.component';
import { ZonasComponent } from "./zonas/zonas.component";
import { EpsComponent } from "./eps/eps.component";
import { DepartamentosComponent } from "./departamentos/departamentos.component";
import { BancosComponent } from './bancos/bancos.component';
import { CuentasBancariasComponent } from "./cuentas-bancarias/cuentas-bancarias.component";
import { CategoriasComponent } from "./categorias/categorias.component";
import { SubcategoriasComponent } from "./subcategorias/subcategorias.component";


const routes : Routes = [
    { path: 'perfiles', component : PerfilesComponent },
    { path: 'rgp', component : RgpComponent },
    { path: 'zonas', component : ZonasComponent },
    { path: 'eps', component:  EpsComponent},
    { path: 'notas-tecnicas', component : NotasTecnicasComponent },
    { path: 'departamentos', component : DepartamentosComponent },
    { path: 'bancos', component : BancosComponent },
    { path: 'cuentas-bancarias', component : CuentasBancariasComponent },
    { path: 'categorias', component : CategoriasComponent },
    { path: 'subcategorias', component : SubcategoriasComponent },
]


@NgModule({
    imports:[RouterModule.forChild(routes)],
    exports:[RouterModule]
})

export class ParametrosRoutingModule {}
