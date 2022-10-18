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
import { TurnosComponent } from "./turnos/turnos.component";
import { CreateTurnoFijoComponent } from "./turnos/turno-fijo/create-turno-fijo/create-turno-fijo.component";
import { FondoPensionComponent } from "./fondo-pension/fondo-pension.component";
import { ArlComponent } from "./arl/arl.component";
import { CajaCompensacionComponent } from ".";
import { FondoCesantiasComponent } from "./fondo-cesantias/fondo-cesantias.component";
import { ConfiguracionEmpresaComponent } from "../configuracion/configuracion-empresa/configuracion-empresa.component";
import { TaxisComponent } from "./taxis/taxis.component";
import { HotelesComponent } from "./hoteles/hoteles.component";
import { CiudadesComponent } from "./ciudades/ciudades.component";
import { PaisesComponent } from "./paises/paises.component";
import { LicenciaConduccionComponent } from "./licencia-conduccion/licencia-conduccion.component";
import { EstructuraEmpresaComponent } from './estructura-empresa/estructura-empresa.component';
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
import { CatalogoComponent } from "./catalogo/catalogo.component";
import { ClientesComponent } from './clientes/clientes.component';
import { ClientecrearComponent } from './clientecrear/clientecrear.component';
import { TableProductosCatalogoComponent } from "./catalogo/components/table-productos-catalogo/table-productos-catalogo.component";
import { PuntodispensacionComponent } from "./puntodispensacion/puntodispensacion.component";

const routes: Routes = [
    { path: 'empresas', component: EmpresasComponent },
    { path: 'sedes', component: SedesComponent },
    { path: 'funcionarios', component: FuncionariosComponent },
    { path: 'funcionario/:id', component: DetalleFuncionarioComponent },
    { path: 'funcionarios/crear', component: CreateComponent },
    // { path: 'persons', component: PersonsComponent },
    { path: 'pacientes', component: PacientesComponent },
    { path: 'puntosdispensacion', component: PuntodispensacionComponent },
    { path: 'cups', component: CupsComponent },
    { path: 'regimenes-niveles', component: RegimenesNivelesComponent },
    { path: 'aseguradoras', component: AseguradorasComponent },
    { path: 'administrators', component: EpsComponent },

    /**Productos */
    { path: 'catalogo', component: CatalogoComponent },
    { path: 'catalogo/crear', component: CrearProductoComponent },
    { path: 'catalogo/editar/:id', component: EditarProductoComponent },
    { path: 'catalogo/ver/:id', component: ProductoComponent },


    { path: 'tabla-catalogo', component: TableProductosCatalogoComponent },
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
    { path: 'empresas', component: EmpresasComponent },

    { path: 'funcionarios', component: FuncionariosComponent },
    { path: 'funcionario/:id', component: DetalleFuncionarioComponent },
    { path: 'funcionarios/crear', component: CreateComponent },

    { path: 'regimenes-niveles', component: RegimenesNivelesComponent },
    { path: 'aseguradoras', component: AseguradorasComponent },
    { path: 'estructura-empresa', component: EstructuraEmpresaComponent },

    { path: 'turnos', component: TurnosComponent },
    { path: 'turnos/crear', component: CreateTurnoFijoComponent },
    { path: 'turnos/crear/:id', component: CreateTurnoFijoComponent },

    { path: 'fondo-pension', component: FondoPensionComponent },
    { path: 'arl', component: ArlComponent },
    { path: 'caja-compensacion', component: CajaCompensacionComponent },
    { path: 'fondo-cesantias', component: FondoCesantiasComponent },
    { path: 'configuracion-empresa', component: ConfiguracionEmpresaComponent },

    { path: 'taxis', component: TaxisComponent },
    { path: 'hoteles', component: HotelesComponent },

    { path: 'ciudades', component: CiudadesComponent },
    { path: 'paises', component: PaisesComponent },

    { path: 'licencia-conduccion', component: LicenciaConduccionComponent },

    { path: 'clientes', component: ClientesComponent },
    { path: 'clientecrear', component: ClientecrearComponent },
    { path: 'clienteeditar/:id', component: ClientecrearComponent }
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class InformacionBaseRoutingModule { }
