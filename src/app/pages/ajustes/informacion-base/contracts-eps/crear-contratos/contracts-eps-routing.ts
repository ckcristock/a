import { NgModule } from "@angular/core";
import { Routes, RouterModule } from '@angular/router';
import { ListContractsComponent } from "../list-contracts/list-contracts.component";
import { CrearContratosComponent } from "./crear-contratos.component";

const routes: Routes = [
    { path: '', component: ListContractsComponent },
    { path: 'create-contract/:id', component: CrearContratosComponent },
    { path: 'create-contract', component: CrearContratosComponent },
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class ContractsEpsRouting { }