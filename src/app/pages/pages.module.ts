import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PagesRoutingModule } from './pages-routing.module';
import { ComponentsModule } from '../components/components.module';
import { HttpClientModule } from '@angular/common/http';
import { GraficalModuleModule } from './grafical-module/grafical-module.module';
import { GraficalModuleComponent } from './grafical-module/grafical-module.component';


@NgModule({
    declarations: [DashboardComponent],
    imports: [
        CommonModule,
        FormsModule,
        PagesRoutingModule,
        ComponentsModule,
        GraficalModuleModule,
    ],
    exports: []
})

export class PagesModule { }
