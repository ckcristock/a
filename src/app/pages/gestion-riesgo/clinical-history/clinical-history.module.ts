import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClinicalHistoryComponent } from './clinical-history.component';
import { DetailClinicalHistoryComponent } from '../detail-clinical-history/detail-clinical-history.component';
import { ClinicalHistoryRoutes } from './clinical-history.routing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DeepDetailComponent } from './deep-detail/deep-detail.component';
import { NgSelectModule } from '@ng-select/ng-select';
import { ComponentsModule } from 'src/app/components/components.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NewClinicalHistoryComponent } from './new-clinical-history/new-clinical-history.component';
import { VariableHightCostComponent } from '../variable-hight-cost/variable-hight-cost.component';

@NgModule({
  imports: [
    ClinicalHistoryRoutes,
    ReactiveFormsModule,
    FormsModule,
    NgSelectModule,
    ComponentsModule,
    CommonModule,
    NgbModule,
  ],
  declarations: [
    ClinicalHistoryComponent,
    DetailClinicalHistoryComponent,
    DeepDetailComponent,
    NewClinicalHistoryComponent,
    VariableHightCostComponent
  ]
})
export class ClinicalHistoryModule { }
