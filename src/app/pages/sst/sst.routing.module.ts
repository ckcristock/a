import { NgModule } from "@angular/core";
import { Routes, RouterModule } from '@angular/router';
import { DocumentosGestionComponent } from './documentos-gestion/documentos-gestion.component';


const routes: Routes = [
    { path: 'documentos-gestion/:modulo', component: DocumentosGestionComponent },
    /* { path: 'documentos-gestion/rrhh', component: DocumentosGestionComponent },
    { path: 'documentos-gestion/juridico', component: DocumentosGestionComponent },
    { path: 'documentos-gestion/calidad', component: DocumentosGestionComponent },
    { path: 'documentos-gestion/gerencia', component: DocumentosGestionComponent }, */
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class SstRoutingModule { }