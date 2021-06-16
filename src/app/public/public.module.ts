import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ApplyComponent } from './encuestas/apply/apply.component';
import { ComponentsModule } from '../components/components.module';

@NgModule({
    declarations: [ApplyComponent],
    imports: [
        CommonModule,
        FormsModule,
        ComponentsModule
    ],
    exports: [ApplyComponent]
})

export class PublicModule { }
