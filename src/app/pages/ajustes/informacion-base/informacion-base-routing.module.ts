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
import { GrupoestibaComponent } from './bodegas/grupoestiba/grupoestiba.component';
import { ProductoComponent } from './productos/producto/producto.component';
import { EditarProductoComponent } from './productos/editar-producto/editar-producto.component';
import { ProveedoresComponent } from './proveedores/proveedores.component';
import { CrearProveedorComponent } from './proveedores/crear-proveedor/crear-proveedor.component';
import { VerProveedorComponent } from './proveedores/ver-proveedor/ver-proveedor.component';
import { EditarProveedorComponent } from './proveedores/editar-proveedor/editar-proveedor.component';


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
    { path: 'productos/editar/:id', component: EditarProductoComponent },
    { path: 'productos/ver/:id', component: ProductoComponent },
    
    { path: 'bodegas', component: BodegasComponent },
    { path: 'estibas/:idBodega', component:  GrupoestibaComponent},
    { path: 'estibas/:idBodega', component:  GrupoestibaComponent},
    
    /**Proveedores */
    { path: 'proveedores', component:  ProveedoresComponent},
    { path: 'proveedores/crear', component: CrearProveedorComponent },
    { path: 'proveedores/ver/:id', component: VerProveedorComponent },
    { path: 'proveedores/editar/:id', component: EditarProveedorComponent },


    { path: 'especialidades', loadChildren: () => import('../informacion-base/speciality/speciality.module').then(m => m.SpecialityModule) },
    { path: 'contracts', loadChildren: () => import('../informacion-base/contracts-eps/contracts-eps.module').then(m => m.ContractsEpsModule) },
    { path: 'professionals', loadChildren: () => import('../informacion-base/professionals/professionals.module').then(m => m.ProfessionalsModule) },
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class InformacionBaseRoutingModule { }