import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { GestionRiesgoRoutingModule } from "./gestion-riesgo-routing.module";
import { ComponentsModule } from '../../components/components.module';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { LaboratoryComponent } from "./laboratory/laboratory.component";
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { DatePipe } from '@angular/common';
import { MatNativeDateModule } from '@angular/material/core';
import { SatDatepickerModule, SatNativeDateModule } from 'saturn-datepicker';
import {
        DateAdapter,
        MAT_DATE_FORMATS,
        MAT_DATE_LOCALE,
} from 'saturn-datepicker';
import {
        MAT_MOMENT_DATE_FORMATS,
        MomentDateAdapter,
} from '@angular/material-moment-adapter';
import { NgbDropdownModule, NgbPaginationModule, NgbTypeaheadModule } from "@ng-bootstrap/ng-bootstrap";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { NewLaboratoryComponent } from "./laboratory/new-laboratory/new-laboratory.component";
import { ViewLaboratoryComponent } from "./laboratory/view-laboratory/view-laboratory.component";
import { MatIconModule } from "@angular/material/icon";
export const MY_FORMATS = {
        parse: {
                dateInput: 'DD/MM/YYYY'
        },
        display: {
                dateInput: 'DD/MM/YYYY',
                monthYearLabel: 'MMM YYYY',
                dateA11yLabel: 'LL',
                monthYearA11yLabel: 'MMMM YYYY'
        }
};
@NgModule({
        declarations: [
                LaboratoryComponent, 
                NewLaboratoryComponent,
                ViewLaboratoryComponent
        ],
        imports: [
                CommonModule,
                GestionRiesgoRoutingModule,
                FormsModule,
                ReactiveFormsModule,
                ComponentsModule,
                NgbDropdownModule,
                MatExpansionModule,
                MatFormFieldModule,
                MatInputModule,
                MatSelectModule,
                MatButtonModule,
                MatAutocompleteModule,
                MatDatepickerModule,
                MatNativeDateModule,
                SatDatepickerModule,
                SatNativeDateModule,
                NgbPaginationModule,
                NgbTypeaheadModule,
                MatIconModule
        ],
        providers: [
                {
                        provide: DateAdapter,
                        useClass: MomentDateAdapter,
                        deps: [MAT_DATE_LOCALE],
                },
                { provide: MAT_DATE_FORMATS, useValue: MY_FORMATS },
                DatePipe,
        ]
})

export class GestionRiesgoModule { }