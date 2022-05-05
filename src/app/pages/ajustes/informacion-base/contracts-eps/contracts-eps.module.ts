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
import { MatExpansionModule } from '@angular/material/expansion';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';

@NgModule({
  imports: [
    CommonModule,
    ContractsEpsRouting,
    FormsModule,
    ReactiveFormsModule,
    NgSelectModule,
    ComponentsModule,
    NgbNavModule,
    NgbPaginationModule,
    NgbTypeaheadModule,
    NgbDropdownModule,
    NgbAlertModule,
    NgbDatepickerModule,
    MatExpansionModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
  ],
  declarations: [
    ContractsEpsComponent,
    CrearContratosComponent,
    ListContractsComponent
  ]
})
export class ContractsEpsModule { }
