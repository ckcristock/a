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

import * as myModules from './index';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';
import { BodegasComponent } from './bodegas/bodegas.component';
import { EditarestibaComponent } from './bodegas/grupoestiba/editarestiba/editarestiba.component';
import { EditargrupoComponent } from './bodegas/grupoestiba/editargrupo/editargrupo.component';
import { CrearbodegaComponent } from './bodegas/crearbodega/crearbodega.component';
import { GrupoestibaComponent } from './bodegas/grupoestiba/grupoestiba.component';

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
        myModules.CrearProductoComponent,
        myModules.ProductosComponent,
        BodegasComponent,
        EditarestibaComponent,
        GrupoestibaComponent,
        EditargrupoComponent,
        CrearbodegaComponent
     
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
        ContractsEpsModule,
        SweetAlert2Module.forRoot()
       

    ],
})
export class InformacionBaseModule { }
 