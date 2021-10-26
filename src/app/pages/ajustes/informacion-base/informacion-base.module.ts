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

import * as myModules from './index'

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
    ],

    imports: [
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
        PipesModule,
        NgbNavModule,
        ReactiveFormsModule,
        PipesModule,
        ArchwizardModule,
        myModules.InformacionBaseRoutingModule,
        myModules.ProfessionalsModule,
        ContractsEpsModule
    ],
})
export class InformacionBaseModule { }
