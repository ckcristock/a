import { NgModule } from "@angular/core";
import { ParametrosRoutingModule } from "./parametros-routing.module";
import { ComponentsModule } from "src/app/components/components.module";
import { HttpClientModule } from "@angular/common/http";
import { NgbDropdownModule, NgbPagination, NgbPaginationModule } from "@ng-bootstrap/ng-bootstrap";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { NgSelectModule } from "@ng-select/ng-select";
import { CommonModule } from "@angular/common";
import { EpsComponent } from './eps/eps.component';
import { DepartamentosComponent } from './departamentos/departamentos.component';
import { MunicipiosComponent } from './municipios/municipios.component';
import { BancosComponent } from './bancos/bancos.component';
import { CuentasBancariasComponent } from './cuentas-bancarias/cuentas-bancarias.component';
import { CategoriasComponent } from './categorias/categorias.component';
import { SubcategoriasComponent } from './subcategorias/subcategorias.component';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { AgendamientoComponent } from './agendamiento/agendamiento.component';
import { TiposModule } from "../tipos/tipos.module";
import { NominaComponent } from './nomina/nomina.component';
import { InformacionBaseModule } from "../informacion-base/informacion-base.module";

@NgModule({
    declarations: [
        EpsComponent,
        DepartamentosComponent,
        MunicipiosComponent,
        BancosComponent,
        CuentasBancariasComponent,
        CategoriasComponent,
        SubcategoriasComponent,
        AgendamientoComponent,
        NominaComponent,
    ],
    imports: [
        ParametrosRoutingModule,
        ReactiveFormsModule,
        ComponentsModule,
        HttpClientModule,
        TiposModule,
        InformacionBaseModule,
        NgbDropdownModule,
        NgbPaginationModule,
        FormsModule,
        NgSelectModule,
        CommonModule,
        MatExpansionModule,
        MatFormFieldModule,
        MatInputModule,
        MatSelectModule,
        SweetAlert2Module.forRoot(),


    ],
    exports: [
        CuentasBancariasComponent,
        CategoriasComponent, 
        SubcategoriasComponent
    ]
})

export class ParametrosModule { }
