import { NgModule } from "@angular/core";
import { Routes, RouterModule } from '@angular/router';
import { CrearContratosComponent } from "./crear-contratos.component";

const routes: Routes = [
    { path: '', component: CrearContratosComponent },
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class ContractsEpsRouting { }