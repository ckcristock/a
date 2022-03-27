import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
import { ClickOutsideModule } from 'ng-click-outside';
import { TranslateModule } from '@ngx-translate/core';

import { FooterComponent } from './footer/footer.component';
import { RightsidebarComponent } from './rightsidebar/rightsidebar.component';
import { HorizontaltopbarComponent } from './horizontaltopbar/horizontaltopbar.component';
import { HorizontalnavbarComponent } from './horizontalnavbar/horizontalnavbar.component';
import { NavItemsDynamicComponent } from './horizontalnavbar/nav-items-dynamic/nav-items-dynamic.component';
import {PipesModule} from 'src/app/core/pipes/pipes.module';
import { TaskManagerComponent } from './task-manager/task-manager.component';
import { FormsModule, NgForm, ReactiveFormsModule } from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';

@NgModule({
  // tslint:disable-next-line: max-line-length
  declarations: [FooterComponent, RightsidebarComponent, HorizontaltopbarComponent, HorizontalnavbarComponent, NavItemsDynamicComponent, TaskManagerComponent],
  imports: [
    CommonModule,
    TranslateModule,
    PerfectScrollbarModule,
    NgbDropdownModule,
    ClickOutsideModule,
    NgSelectModule,
    RouterModule,
    PipesModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  exports: [ FooterComponent,  RightsidebarComponent, HorizontaltopbarComponent, HorizontalnavbarComponent, TaskManagerComponent],
  providers: []
})
export class SharedModule { }
