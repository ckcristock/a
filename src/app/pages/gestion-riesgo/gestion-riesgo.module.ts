import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { GestionRiesgoRoutingModule } from "./gestion-riesgo-routing.module";
import { ComponentsModule } from '../../components/components.module';


@NgModule({
        declarations: [],
        imports: [
                CommonModule,
                GestionRiesgoRoutingModule,
                ComponentsModule
        ],
})

export class GestionRiesgoModule { }