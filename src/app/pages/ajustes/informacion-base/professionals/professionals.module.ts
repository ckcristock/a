import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfessionalsComponent } from './professionals.component';
import { NgSelectModule } from '@ng-select/ng-select';
import { NgbCollapseModule, NgbDropdownModule, NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';
import { ComponentsModule } from 'src/app/components/components.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProfesionalsRoutes } from './profesionals.routing';
import { PersonsComponent } from './persons/persons.component';
import { ModalComponent } from './persons/modal/modal.component';
import { TableComponent } from './persons/table/table.component';
import { PipesModule } from 'src/app/core/pipes/pipes.module';

@NgModule({
  imports: [
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    NgbPaginationModule,
    NgSelectModule,
    NgbDropdownModule,
    NgbCollapseModule,
    ComponentsModule,
    ProfesionalsRoutes,
    PipesModule
  ],
  declarations: [
    ProfessionalsComponent,
    PersonsComponent,
    ModalComponent,
    TableComponent
  ]

})
export class ProfessionalsModule { }
