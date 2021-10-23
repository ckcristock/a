import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContractsEpsComponent } from './contracts-eps.component';
import { CrearContratosComponent } from './crear-contratos/crear-contratos.component';
import { ContractsEpsRouting } from './crear-contratos/contracts-eps-routing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';
import { ComponentsModule } from 'src/app/components/components.module';
import { NgbNavModule, NgbPaginationModule, NgbTypeaheadModule, NgbDropdownModule, NgbAlertModule, NgbDatepickerModule } from '@ng-bootstrap/ng-bootstrap';
import { ListContractsComponent } from './list-contracts/list-contracts.component';

@NgModule({
  imports: [
    CommonModule,
    ContractsEpsRouting,
    FormsModule,
    ReactiveFormsModule,
    NgSelectModule,
    ComponentsModule,
    NgbNavModule, NgbPaginationModule, NgbTypeaheadModule, NgbDropdownModule, NgbAlertModule, NgbDatepickerModule
  ],
  declarations: [
    ContractsEpsComponent,
    CrearContratosComponent,
    ListContractsComponent
  ]
})
export class ContractsEpsModule { }
