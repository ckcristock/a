import { NgModule } from "@angular/core";
import { ParametrosRoutingModule } from "./parametros-routing.module";
import { PerfilesComponent } from './perfiles/perfiles.component';
import { RgpComponent } from './rgp/rgp.component';
import { NotasTecnicasComponent } from './notas-tecnicas/notas-tecnicas.component';
import { ZonasComponent } from './zonas/zonas.component';
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

@NgModule({
    declarations : [
        NotasTecnicasComponent,
        PerfilesComponent,
        ZonasComponent,
        RgpComponent, EpsComponent, DepartamentosComponent, MunicipiosComponent, BancosComponent, CuentasBancariasComponent, CategoriasComponent, SubcategoriasComponent
    ],
    imports: [
        ParametrosRoutingModule,
        ReactiveFormsModule,
        ComponentsModule,
        HttpClientModule,
        NgbDropdownModule,
        NgbPaginationModule,
        FormsModule,
        NgSelectModule,
        CommonModule,
        SweetAlert2Module.forRoot(),


    ],
    exports: []
})

export class ParametrosModule {}
