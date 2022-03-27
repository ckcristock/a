import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PagesRoutingModule } from './pages-routing.module';
import { ComponentsModule } from '../components/components.module';
import { HttpClientModule } from '@angular/common/http';
import { GraficalModuleModule } from './grafical-module/grafical-module.module';
import { TasksComponent } from './tasks/tasks.component';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { FullCalendarModule } from '@fullcalendar/angular';
import { NgbModule, NgbNav } from '@ng-bootstrap/ng-bootstrap';
import { LOCALE_ID } from '@angular/core';
import localeEs from '@angular/common/locales/es';
import { registerLocaleData } from '@angular/common';
import { TaskViewComponent } from './tasks/task-view/task-view.component';
registerLocaleData(localeEs, 'es');


@NgModule({
    declarations: [DashboardComponent, TasksComponent, TaskViewComponent],
    imports: [
        FullCalendarModule,

        CommonModule,
        FormsModule,
        PagesRoutingModule,
        ComponentsModule,
        GraficalModuleModule,
        DragDropModule,
        NgbModule,
    ],
    exports: [],
    providers: [{ provide: LOCALE_ID, useValue: 'es' } // Añades esta línea en los providers
    ],
})

export class PagesModule { }
