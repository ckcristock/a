import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SpecialityComponent } from './speciality.component';
import { SpecialityModalComponent } from './speciality-modal/speciality-modal.component';
import { RouterModule, Routes } from '@angular/router';
import { ComponentsModule } from 'src/app/components/components.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbDropdownModule, NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';




const routes: Routes = [
  { path: '', component: SpecialityComponent },
]

@NgModule({
  declarations: [SpecialityComponent, SpecialityModalComponent],
  imports: [
    [RouterModule.forChild(routes)],
    CommonModule,
    ComponentsModule,
    FormsModule,
    ReactiveFormsModule,
    NgbDropdownModule,
    NgbPaginationModule
  ],
  exports: [RouterModule]
})
export class SpecialityModule { }
