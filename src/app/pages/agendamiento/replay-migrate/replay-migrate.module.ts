import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReplayMigrateComponent } from './replay-migrate.component';
import { ReplayMigrateRoutingModule } from './replay-migrate-routing.module';
import { NgSelectModule } from '@ng-select/ng-select';
import { NgbDropdownModule, NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';
import { ComponentsModule } from 'src/app/components/components.module';
import { FormsModule } from '@angular/forms'
import { MatExpansionModule } from '@angular/material/expansion';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { SearchPipe } from './search.pipe';

@NgModule({
  imports: [
    CommonModule,
    ReplayMigrateRoutingModule,
    NgSelectModule,
    ComponentsModule,
    NgbPaginationModule,
    FormsModule,
    NgbDropdownModule,
    MatExpansionModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,

  ],
  declarations: [
    ReplayMigrateComponent,
    SearchPipe,
  ]
})
export class ReplayMigrateModule { }
