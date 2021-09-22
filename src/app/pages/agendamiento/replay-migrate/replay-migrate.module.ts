import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReplayMigrateComponent } from './replay-migrate.component';
import { ReplayMigrateRoutingModule } from './replay-migrate-routing.module';
import { NgSelectModule } from '@ng-select/ng-select';
import { NgbDropdownModule, NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';
import { ComponentsModule } from 'src/app/components/components.module';
import { FormsModule } from '@angular/forms';


@NgModule({
  imports: [
    CommonModule,
    ReplayMigrateRoutingModule,
    NgSelectModule,
    ComponentsModule,
    NgbPaginationModule,
    FormsModule,
    NgbDropdownModule
  ],
  declarations: [ReplayMigrateComponent]
})
export class ReplayMigrateModule { }
