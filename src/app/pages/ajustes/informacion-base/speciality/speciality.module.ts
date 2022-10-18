import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SpecialityComponent } from './speciality.component';
import { SpecialityModalComponent } from './speciality-modal/speciality-modal.component';
import { RouterModule, Routes } from '@angular/router';
import { ComponentsModule } from 'src/app/components/components.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbDropdownModule, NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';
import { PipesModule } from 'src/app/core/pipes/pipes.module';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';



const routes: Routes = [
  { path: '', component: SpecialityComponent },
]

@NgModule({
  declarations: [SpecialityComponent, SpecialityModalComponent],
  imports: [
    [RouterModule.forChild(routes)],
    CommonModule,
    PipesModule,
    ComponentsModule,
    FormsModule,
    ReactiveFormsModule,
    NgbDropdownModule,
    NgbPaginationModule,
    MatExpansionModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
  ],
  exports: [RouterModule]
})
export class SpecialityModule { }
