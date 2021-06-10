import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';

import { DocumentosGestionComponent } from './documentos-gestion/documentos-gestion.component';
import { SstRoutingModule } from './sst.routing.module';


@NgModule({
    declarations:[DocumentosGestionComponent],
    imports:[CommonModule, SstRoutingModule],
    exports:[],
})

export class SstModule {}