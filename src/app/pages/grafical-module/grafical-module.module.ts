import { CommonModule } from '@angular/common';
import { GraficalModuleComponent } from './grafical-module.component';
import { GraficalModuleRoutes } from './grafical-module.routing';
import { NgxEchartsModule } from 'ngx-echarts';
import { NgApexchartsModule } from 'ng-apexcharts';
import * as echarts from 'echarts';
import { PagetitleComponent } from './pagetitle/pagetitle.component';
import { StatComponent } from './stat/stat.component';
import { NgbDatepickerModule } from '@ng-bootstrap/ng-bootstrap';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    GraficalModuleRoutes,
    NgApexchartsModule,
    NgxEchartsModule.forRoot({
      echarts,
    }),
    NgbDatepickerModule,
    NgSelectModule
  ],
  declarations: [GraficalModuleComponent, PagetitleComponent, StatComponent],
  exports: [
    GraficalModuleComponent
  ],
})
export class GraficalModuleModule { }
