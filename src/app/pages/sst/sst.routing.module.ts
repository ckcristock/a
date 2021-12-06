import { NgModule } from "@angular/core";
import { Routes, RouterModule } from '@angular/router';
import { PipesModule } from "src/app/core/pipes/pipes.module";
import { DocumentosGestionComponent } from './documentos-gestion/documentos-gestion.component';


const routes: Routes = [
    { path: 'documentos-gestion', component: DocumentosGestionComponent }
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule, PipesModule
    ]
})

export class SstRoutingModule { }