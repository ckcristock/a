import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { UiModule } from '../shared/ui/ui.module';
import { NgbAlertModule } from '@ng-bootstrap/ng-bootstrap';
import { ModalBasicComponent } from './modal-basic/modal-basic.component';
// import { SelectModule } from 'ng-select';

@NgModule({
  declarations: [
    ModalBasicComponent
  ],
  exports: [
    ModalBasicComponent,
    // SelectModule

  ],
  imports: [
    FormsModule,
    CommonModule,
    // SelectModule
  ]
})
export class ComponentsModule { }
