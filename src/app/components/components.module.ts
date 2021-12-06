import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbAccordionModule, NgbAlertModule, NgbModule, NgbToastModule } from '@ng-bootstrap/ng-bootstrap';
import { ModalBasicComponent } from './modal-basic/modal-basic.component';
import { SetPacienteComponent } from './paciente/set-paciente/set-paciente.component';
import { DetalleCitaComponent } from './citas/detalle-cita/detalle-cita.component';
import { ListaCitasComponent } from './citas/lista-citas/lista-citas.component';
import { BuildingComponent } from './building/building.component';
import { RestorePasswordComponent } from './restore-password/restore-password.component';
import { NgSelectModule } from '@ng-select/ng-select';
import { StatsComponent } from './stats/stats.component';
import { TimeLineComponent } from './time-line/time-line.component';
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { PipesModule } from '../core/pipes/pipes.module';
import { ModalPaymentComponent } from './modal-payment/modal-payment.component';
import { NotDataComponent } from './not-data/not-data.component';
import { NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';
import { SearchComponent } from './search/search.component';
import { ShowErrorsComponent } from './show-errors/show-errors.component';
import { CabeceraComponent } from './cabecera/cabecera.component';
import { ApplicantComponent } from './applicant/applicant.component';
import { BuilderFormComponent } from '../core/builder-form/builder-form.component';


@NgModule({
  declarations: [
    ModalBasicComponent,
    SetPacienteComponent,
    DetalleCitaComponent,
    ListaCitasComponent,
    BuildingComponent,
    RestorePasswordComponent,
    StatsComponent,
    TimeLineComponent,
    NotDataComponent,
    ModalPaymentComponent,
    SearchComponent,
    ShowErrorsComponent,
    CabeceraComponent,
    ApplicantComponent,
    BuilderFormComponent
  ],

  exports: [
    ModalBasicComponent,
    SetPacienteComponent,
    DetalleCitaComponent,
    ListaCitasComponent,
    BuildingComponent,
    RestorePasswordComponent,
    StatsComponent,
    TimeLineComponent,
    NotDataComponent,
    ModalPaymentComponent,
    ShowErrorsComponent,
    CabeceraComponent,
    ApplicantComponent,
    BuilderFormComponent
  ],

  imports: [
    NgbModule,


    NgbPaginationModule,
    NgbAccordionModule,
    FormsModule,
    CommonModule,
    NgSelectModule,
    PerfectScrollbarModule,
    PipesModule,
    NgbToastModule,
    ReactiveFormsModule
  ]
})
export class ComponentsModule { }
