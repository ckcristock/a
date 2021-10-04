import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContractsEpsComponent } from './contracts-eps.component';
import { CrearContratosComponent } from './crear-contratos/crear-contratos.component';
import { ContractsEpsRouting } from './crear-contratos/contracts-eps-routing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';

@NgModule({
  imports: [
    CommonModule,
    ContractsEpsRouting,
    FormsModule,
    ReactiveFormsModule,
    NgSelectModule,

  ],
  declarations: [
    ContractsEpsComponent,
    CrearContratosComponent
  ]
})
export class ContractsEpsModule { }
