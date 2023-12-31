import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EstructuraEmpresaComponent } from './estructura-empresa.component';
import { ComponentsModule } from 'src/app/components/components.module';
import { HttpClientModule } from '@angular/common/http';
import { NgbCollapseModule, NgbDropdownModule, NgbNavModule, NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';
import { PipesModule } from 'src/app/core/pipes/pipes.module';
import { StructureCompanyRoutingModule } from './structure-company.routing';
import { MatExpansionModule, MatFormFieldModule, MatInputModule, MatSelectModule } from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    ComponentsModule,
    HttpClientModule,
    CommonModule,
    NgbPaginationModule,
    NgbDropdownModule,
    FormsModule,
    NgSelectModule,
    NgbDropdownModule,
    NgbCollapseModule,
    PipesModule,
    NgbNavModule,
    ReactiveFormsModule,
    StructureCompanyRoutingModule,
    MatExpansionModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule
  ],
  declarations: [EstructuraEmpresaComponent],
  exports: [EstructuraEmpresaComponent]
})
export class StructureCompanyModule { }
