import { NgModule } from '@angular/core';
import { EmpresasComponent } from './empresas/empresas.component';
import { CommonModule } from '@angular/common';
import { InformacionBaseRoutingModule } from './informacion-base-routing.module';
import { FuncionariosComponent } from './funcionarios/funcionarios.component';
import { ProfesionalesComponent } from './profesionales/profesionales.component';
import { PacientesComponent } from './pacientes/pacientes.component';
import { EspecialidadesComponent } from './especialidades/especialidades.component';
import { CupsComponent } from './cups/cups.component';
import { RegimenesNivelesComponent } from './regimenes-niveles/regimenes-niveles.component';
import { AseguradorasComponent } from './aseguradoras/aseguradoras.component';
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
import { DetalleFuncionarioComponent } from './funcionarios/detalle-funcionario/detalle-funcionario.component';
import { PermissionsComponent } from './funcionarios/detalle-funcionario/permissions/permissions.component';
import { MenuChildComponent } from './funcionarios/detalle-funcionario/permissions/menu-child/menu-child.component';
import { SetFuncionarioComponent } from './funcionarios/detalle-funcionario/set-funcionario/set-funcionario.component';
import { CreateComponent } from './funcionarios/create/create.component';
import { ArchwizardModule } from 'angular-archwizard';
import { DatosFuncionarioComponent } from './funcionarios/create/datos-funcionario/datos-funcionario.component';
import { InformacionEmpresaComponent } from './funcionarios/create/informacion-empresa/informacion-empresa.component';
import { PrestacionesSocialesComponent } from './funcionarios/create/prestaciones-sociales/prestaciones-sociales.component';
import { DotacionTallasComponent } from './funcionarios/create/dotacion-tallas/dotacion-tallas.component';
import { VerFuncionarioComponent } from './funcionarios/detalle-funcionario/ver-funcionario/ver-funcionario.component';
import { DatosBasicosComponent } from './funcionarios/detalle-funcionario/ver-funcionario/datos-basicos/datos-basicos.component';
import { SalarioComponent } from './funcionarios/detalle-funcionario/ver-funcionario/salario/salario.component';
import { DatosEmpresaComponent } from './funcionarios/detalle-funcionario/ver-funcionario/datos-empresa/datos-empresa.component';
import { AfiliacionesComponent } from './funcionarios/detalle-funcionario/ver-funcionario/afiliaciones/afiliaciones.component';
import { HttpClientModule } from '@angular/common/http';
import { BonoComponent } from './funcionarios/detalle-funcionario/ver-funcionario/bono/bono.component';
import { CajaCompensacionComponent } from './caja-compensacion/caja-compensacion.component';
import { SedesComponent } from './sedes/sedes.component';
import { EpsComponent } from "./eps/eps.component";
// import { SpecialitysComponent } from './specialities/speciality.component';
import { PersonsComponent } from './persons/persons.component';
import { TableComponent } from './persons/table/table.component';
import { ModalComponent } from './persons/modal/modal.component';
import { ModalCupComponent } from './cups/modal-cup/modal-cup.component';
import { ModalDatosBasicosComponent } from './funcionarios/detalle-funcionario/ver-funcionario/datos-basicos/modal-datos-basicos/modal-datos-basicos.component';

@NgModule({
    declarations: [
        EmpresasComponent,
        FuncionariosComponent,
        RegimenesNivelesComponent,
        AseguradorasComponent,
        DetalleFuncionarioComponent,
        PermissionsComponent,
        MenuChildComponent,
        SetFuncionarioComponent,
        CreateComponent,
        DatosFuncionarioComponent,
        InformacionEmpresaComponent,
        PrestacionesSocialesComponent,
        DotacionTallasComponent,
        VerFuncionarioComponent,
        DatosBasicosComponent,
        ModalDatosBasicosComponent,
        SalarioComponent,
        DatosEmpresaComponent,
        AfiliacionesComponent,
        ProfesionalesComponent,
        BonoComponent,
        CajaCompensacionComponent,
        SedesComponent,
        PersonsComponent, PacientesComponent, EspecialidadesComponent,
        CupsComponent,
        EpsComponent,
        // SpecialitysComponent,
        TableComponent,
        ModalComponent,
        ModalCupComponent,
    ],

    imports: [
        CommonModule,
        InformacionBaseRoutingModule,
        NgbPaginationModule,
        NgbDropdownModule,
        ChartsModule,
        ComponentsModule,
        FormsModule,
        NgSelectModule,
        HttpClientModule,
        NgbDropdownModule,
        NgbCollapseModule,
        PipesModule,
        NgbNavModule,
        ReactiveFormsModule,
        ArchwizardModule,
        PipesModule

    ],
})
export class InformacionBaseModule { }
