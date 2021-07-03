import { NgModule } from "@angular/core";
import { Routes, RouterModule } from '@angular/router';
import { EmpresasComponent } from './empresas/empresas.component';
import { SedesComponent } from './sedes/sedes.component';
import { FuncionariosComponent } from './funcionarios/funcionarios.component';
import { ProfesionalesComponent } from './profesionales/profesionales.component';
import { PacientesComponent } from './pacientes/pacientes.component';
import { EspecialidadesComponent } from './especialidades/especialidades.component';
import { AseguradorasComponent } from './aseguradoras/aseguradoras.component';
import { RegimenesNivelesComponent } from './regimenes-niveles/regimenes-niveles.component';
import { CupsComponent } from './cups/cups.component';


const routes : Routes = [
    {path:'empresas',component:EmpresasComponent},
    {path:'sedes',component:SedesComponent},
    {path:'funcionarios',component:FuncionariosComponent},
    {path:'profesionales',component:ProfesionalesComponent},
    {path:'pacientes',component:PacientesComponent},
    {path:'especialidades',component:EspecialidadesComponent},
    {path:'cups',component:CupsComponent},
    {path:'regimenes-niveles',component:RegimenesNivelesComponent},
    {path:'aseguradoras',component:AseguradorasComponent},
]

@NgModule({
    imports:[RouterModule.forChild(routes)],
    exports:[RouterModule]
})

export class InformacionBaseRoutingModule {}