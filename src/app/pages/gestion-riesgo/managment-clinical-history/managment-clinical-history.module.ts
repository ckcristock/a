import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ManagmentClinicalHistoryComponent } from './managment-clinical-history.component';
import { ManagmentClinicalHistoryRoutes } from './managment-clinical-history.routing';
import { ComponentsModule } from 'src/app/components/components.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { NgSelectModule } from '@ng-select/ng-select';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { EditClinicalModelComponent } from './edit-clinical-model/edit-clinical-model.component';
import { VariablesClinicalModelComponent } from './variables-clinical-model/variables-clinical-model.component';

@NgModule({
  imports: [
    CommonModule,
    ManagmentClinicalHistoryRoutes,
    ReactiveFormsModule,
    FormsModule,
    NgSelectModule,
    ComponentsModule,
    CommonModule,
    PerfectScrollbarModule,
    NgbModule,
  ],
  declarations: [
    ManagmentClinicalHistoryComponent,
    EditClinicalModelComponent,
    VariablesClinicalModelComponent
  ]
})
export class ManagmentClinicalHistoryModule { }
