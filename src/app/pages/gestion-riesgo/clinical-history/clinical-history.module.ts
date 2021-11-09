import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClinicalHistoryComponent } from './clinical-history.component';
import { DetailClinicalHistoryComponent } from '../detail-clinical-history/detail-clinical-history.component';
import { ClinicalHistoryRoutes } from './clinical-history.routing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DeepDetailComponent } from './deep-detail/deep-detail.component';

@NgModule({
  imports: [
    CommonModule,
    ClinicalHistoryRoutes,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [ClinicalHistoryComponent, DetailClinicalHistoryComponent, DeepDetailComponent]
})
export class ClinicalHistoryModule { }
