import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfessionalsComponent } from './professionals.component';
import { NgSelectModule } from '@ng-select/ng-select';
import { NgbCollapseModule, NgbDropdownModule, NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';
import { ComponentsModule } from 'src/app/components/components.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProfesionalsRoutes } from './profesionals.routing';

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
    ProfesionalsRoutes
  ],
  declarations: [ProfessionalsComponent]
})
export class ProfessionalsModule { }
