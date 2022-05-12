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
import { MatExpansionModule } from '@angular/material/expansion';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';

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
    MatExpansionModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
  ],
  declarations: [
    ManagmentClinicalHistoryComponent,
    EditClinicalModelComponent,
    VariablesClinicalModelComponent
  ],
})
export class ManagmentClinicalHistoryModule { }
