import { NgModule } from "@angular/core";
import { Routes, RouterModule } from '@angular/router';
import { EmpresasComponent } from './empresas/empresas.component';
import { SedesComponent } from './sedes/sedes.component';
import { FuncionariosComponent } from './funcionarios/funcionarios.component';
import { PersonsComponent } from './persons/persons.component';
import { PacientesComponent } from './pacientes/pacientes.component';
import { EspecialidadesComponent } from './especialidades/especialidades.component';
import { AseguradorasComponent } from './aseguradoras/aseguradoras.component';
import { RegimenesNivelesComponent } from './regimenes-niveles/regimenes-niveles.component';
import { CupsComponent } from './cups/cups.component';
import { DetalleFuncionarioComponent } from './funcionarios/detalle-funcionario/detalle-funcionario.component';
import { EpsComponent } from "./eps/eps.component";
import { CreateComponent } from "./funcionarios/create/create.component";
import { SpecialitysComponent } from "./specialities/speciality.component";


const routes : Routes = [
    {path:'empresas',component:EmpresasComponent},
    {path:'sedes',component:SedesComponent},

    { path: 'funcionarios', component: FuncionariosComponent },
    { path: 'funcionario/:id', component: DetalleFuncionarioComponent },
    { path: 'funcionarios/crear', component: CreateComponent },

    {path:'persons',component:PersonsComponent},
    {path:'pacientes',component:PacientesComponent},
    {path:'especialidades',component:EspecialidadesComponent},
    {path:'cups',component:CupsComponent},
    {path:'regimenes-niveles',component:RegimenesNivelesComponent},
    {path:'aseguradoras',component:AseguradorasComponent},
    {path:'administrators',component:EpsComponent},
    {path:'specialities',component:SpecialitysComponent},
]

@NgModule({
    imports:[RouterModule.forChild(routes)],
    exports:[RouterModule]
})

export class InformacionBaseRoutingModule {}