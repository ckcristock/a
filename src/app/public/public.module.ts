import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ApplyComponent } from './encuestas/apply/apply.component';
import { ComponentsModule } from '../components/components.module';
import { NgSelectModule } from '@ng-select/ng-select';
import { ModalBasicComponent } from '../components/modal-basic/modal-basic.component';

@NgModule({
    declarations: [ApplyComponent, ModalBasicComponent],
    imports: [
        CommonModule,
        NgSelectModule,
        FormsModule,
        ComponentsModule
    ],
    exports: [ApplyComponent]
})

export class PublicModule { }
