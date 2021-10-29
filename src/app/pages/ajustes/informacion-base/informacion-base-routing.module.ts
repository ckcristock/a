import { NgModule } from "@angular/core";
import { Routes, RouterModule } from '@angular/router';
import { EmpresasComponent } from './empresas/empresas.component';
import { SedesComponent } from './sedes/sedes.component';
import { FuncionariosComponent } from './funcionarios/funcionarios.component';
import { PacientesComponent } from './pacientes/pacientes.component';
import { AseguradorasComponent } from './aseguradoras/aseguradoras.component';
import { RegimenesNivelesComponent } from './regimenes-niveles/regimenes-niveles.component';
import { CupsComponent } from './cups/cups.component';
import { DetalleFuncionarioComponent } from './funcionarios/detalle-funcionario/detalle-funcionario.component';
// import { PersonsComponent } from "./persons/persons.component";
import { CreateComponent } from "./funcionarios/create/create.component";
import { EpsComponent } from "./eps/eps.component";
import { ProductosComponent } from './productos/productos.component';
import { CrearProductoComponent } from './productos/crear-producto/crear-producto.component';
import { BodegasComponent } from './bodegas/bodegas.component';


const routes: Routes = [
    { path: 'empresas', component: EmpresasComponent },
    { path: 'sedes', component: SedesComponent },
    { path: 'funcionarios', component: FuncionariosComponent },
    { path: 'funcionario/:id', component: DetalleFuncionarioComponent },
    { path: 'funcionarios/crear', component: CreateComponent },
    // { path: 'persons', component: PersonsComponent },
    { path: 'pacientes', component: PacientesComponent },
    { path: 'cups', component: CupsComponent },
    { path: 'regimenes-niveles', component: RegimenesNivelesComponent },
    { path: 'aseguradoras', component: AseguradorasComponent },
    { path: 'administrators', component: EpsComponent },
    /**Productos */
    { path: 'productos', component: ProductosComponent },
    { path: 'productos/crear', component: CrearProductoComponent },
    { path: 'bodegas', component: BodegasComponent },

    { path: 'especialidades', loadChildren: () => import('../informacion-base/speciality/speciality.module').then(m => m.SpecialityModule) },
    { path: 'contracts', loadChildren: () => import('../informacion-base/contracts-eps/contracts-eps.module').then(m => m.ContractsEpsModule) },
    { path: 'professionals', loadChildren: () => import('../informacion-base/professionals/professionals.module').then(m => m.ProfessionalsModule) },
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class InformacionBaseRoutingModule { }