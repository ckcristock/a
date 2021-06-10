import { NgModule } from "@angular/core";
import { EmpresasComponent } from './empresas/empresas.component';
import { CommonModule } from '@angular/common';
import { InformacionBaseRoutingModule } from "./informacion-base-routing.module";
import { SedesComponent } from './sedes/sedes.component';
import { FuncionariosComponent } from './funcionarios/funcionarios.component';
import { ProfesionalesComponent } from './profesionales/profesionales.component';
import { PacientesComponent } from './pacientes/pacientes.component';
import { EspecialidadesComponent } from './especialidades/especialidades.component';
import { CupsComponent } from './cups/cups.component';
import { RegimenesNivelesComponent } from './regimenes-niveles/regimenes-niveles.component';
import { AseguradorasComponent } from './aseguradoras/aseguradoras.component';


@NgModule({
    declarations:[
        EmpresasComponent, SedesComponent, FuncionariosComponent,
        ProfesionalesComponent, PacientesComponent, EspecialidadesComponent,
        CupsComponent, RegimenesNivelesComponent, AseguradorasComponent],
        
    imports:[CommonModule,InformacionBaseRoutingModule]
})

export class InformacionBaseModule {}