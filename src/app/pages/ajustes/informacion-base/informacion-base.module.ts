import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  NgbPaginationModule,
  NgbDropdownModule,
  NgbCollapseModule,
  NgbNavModule,
} from '@ng-bootstrap/ng-bootstrap';
import { ChartsModule } from 'ng2-charts';
import { ComponentsModule } from 'src/app/components/components.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';
import { PipesModule } from 'src/app/core/pipes/pipes.module';
import { HttpClientModule } from '@angular/common/http';
import { ArchwizardModule } from 'angular-archwizard';
import { ContractsEpsModule } from './contracts-eps/contracts-eps.module';
import { FileManagerModule } from '@syncfusion/ej2-angular-filemanager';

import * as myModules from './index';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';
import { BodegasComponent } from './bodegas/bodegas.component';
import { EditarestibaComponent } from './bodegas/grupoestiba/editarestiba/editarestiba.component';
import { EditargrupoComponent } from './bodegas/grupoestiba/editargrupo/editargrupo.component';
import { CrearbodegaComponent } from './bodegas/crearbodega/crearbodega.component';
import { GrupoestibaComponent } from './bodegas/grupoestiba/grupoestiba.component';
import { ProductoComponent } from './productos/producto/producto.component';
import { EditarProductoComponent } from './productos/editar-producto/editar-producto.component';
import { ProveedoresComponent } from './proveedores/proveedores.component';
import { CrearProveedorComponent } from './proveedores/crear-proveedor/crear-proveedor.component';
import { NgbTypeaheadModule } from '@ng-bootstrap/ng-bootstrap';
import { VerProveedorComponent } from './proveedores/ver-proveedor/ver-proveedor.component';
import { EditarProveedorComponent } from './proveedores/editar-proveedor/editar-proveedor.component';
import { CatalogoComponent } from './catalogo/catalogo.component';
import { ActivoFijoCatalogoComponent } from './catalogo/components/activo-fijo-catalogo/activo-fijo-catalogo.component';
import { ClientesComponent } from './clientes/clientes.component';
import { ClientecrearComponent } from './clientecrear/clientecrear.component';
import { TableProductosCatalogoComponent } from './catalogo/components/table-productos-catalogo/table-productos-catalogo.component';
import { DotacionCrearComponent } from './dotacion-crear/dotacion-crear.component';
import { CompaniesToWorkComponent } from './funcionarios/detalle-funcionario/permissions/companies-to-work/companies-to-work.component';
import { PuntodispensacionComponent } from './puntodispensacion/puntodispensacion.component';
import { DispensingPointComponent } from './funcionarios/detalle-funcionario/permissions/dispensing-point/dispensing-point.component';
import { BoardPermissionsComponent } from './funcionarios/detalle-funcionario/permissions/board-permissions/board-permissions.component';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { SedesComponent } from './sedes/sedes.component';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatIconModule } from '@angular/material/icon';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatSlideToggleModule } from '@angular/material';



@NgModule({
  declarations: [
    myModules.EmpresasComponent,
    myModules.FuncionariosComponent,
    myModules.RegimenesNivelesComponent,
    myModules.AseguradorasComponent,
    myModules.DetalleFuncionarioComponent,
    myModules.PermissionsComponent,
    myModules.MenuChildComponent,
    myModules.SetFuncionarioComponent,
    myModules.CreateComponent,
    myModules.DatosFuncionarioComponent,
    myModules.InformacionEmpresaComponent,
    myModules.PrestacionesSocialesComponent,
    myModules.DotacionTallasComponent,
    myModules.VerFuncionarioComponent,
    myModules.DatosBasicosComponent,
    myModules.ModalDatosBasicosComponent,
    myModules.SalarioComponent,
    myModules.DatosEmpresaComponent,
    myModules.AfiliacionesComponent,
    // myModules.ProfesionalesComponent,
    myModules.BonoComponent,
    myModules.CajaCompensacionComponent,
    myModules.SedesComponent,
    // myModules.PersonsComponent,
    myModules.PacientesComponent,
    myModules.EspecialidadesComponent,
    myModules.CupsComponent,
    myModules.EpsComponent,
    // myModules.TableComponent,
    // myModules.ModalComponent,
    myModules.ModalCupComponent,
    myModules.ModalDatosBasicosComponent,
    myModules.FuncionariosComponent,
    // myModules.ProfesionalesComponent
    myModules.PacientesComponent,
    myModules.EspecialidadesComponent,
    myModules.CupsComponent,
    myModules.RegimenesNivelesComponent,
    myModules.AseguradorasComponent,
    myModules.EmpresasComponent,
    // myModules.ProfessionalsModule,
    myModules.EstructuraEmpresaComponent,
    myModules.TurnosComponent,
    myModules.TurnoFijoComponent,
    myModules.CreateTurnoFijoComponent,
    myModules.TurnoRotativoComponent,
    myModules.CreateTurnoRotativoComponent,
    myModules.FondoPensionComponent,
    myModules.ArlComponent,
    myModules.FondoCesantiasComponent,
    myModules.TaxisComponent,
    myModules.HotelesComponent,
    myModules.CiudadesComponent,
    myModules.PaisesComponent,
    myModules.LicenciaConduccionComponent,

    myModules.CrearProductoComponent,
    myModules.ProductosComponent,
    BodegasComponent,
    EditarestibaComponent,
    GrupoestibaComponent,
    EditargrupoComponent,
    CrearbodegaComponent,
    ProductoComponent,
    EditarProductoComponent,
    ProveedoresComponent,
    CrearProveedorComponent,
    VerProveedorComponent,
    EditarProveedorComponent,
    CatalogoComponent,
    ActivoFijoCatalogoComponent,
    ClientesComponent,
    ClientecrearComponent,
    TableProductosCatalogoComponent,
    DotacionCrearComponent,
    CompaniesToWorkComponent,
    PuntodispensacionComponent,
    DispensingPointComponent,
    BoardPermissionsComponent,
    SedesComponent,

  ],

  imports: [
    FileManagerModule,
    HttpClientModule,
    CommonModule,
    NgbPaginationModule,
    NgbDropdownModule,
    ChartsModule,
    ComponentsModule,
    FormsModule,
    NgSelectModule,
    NgbDropdownModule,
    NgbCollapseModule,
    NgbNavModule,
    ReactiveFormsModule,
    PipesModule,
    ArchwizardModule,
    myModules.InformacionBaseRoutingModule,
    myModules.ProfessionalsModule,
    ContractsEpsModule,
    NgbTypeaheadModule,
    CKEditorModule,
    MatExpansionModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatCheckboxModule,
    MatSlideToggleModule,
    MatIconModule,
    MatNativeDateModule,
    MatDatepickerModule,
    MatAutocompleteModule,
    SweetAlert2Module.forRoot()
  ],
  exports: [
    myModules.FondoPensionComponent,
    myModules.FondoCesantiasComponent,
    myModules.CajaCompensacionComponent,
    myModules.ArlComponent,
    myModules.SedesComponent,
  ]
})
export class InformacionBaseModule { }
