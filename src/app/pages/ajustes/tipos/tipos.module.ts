import { NgModule } from "@angular/core";
import { TiposRoutingModule } from "./tipos-routing.module";
import { TiposAgendaComponent } from './tipos-agenda/tipos-agenda.component';
import { TiposConsultaComponent } from './tipos-consulta/tipos-consulta.component';
import { NgbPaginationModule } from "@ng-bootstrap/ng-bootstrap";
import { CommonModule } from "@angular/common";


@NgModule({
    declarations : [TiposAgendaComponent, TiposConsultaComponent],
    imports : [TiposRoutingModule, NgbPaginationModule, CommonModule]
})

export class TiposModule{}