import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ReplayMigrateComponent } from './replay-migrate.component';

const routes: Routes = [
    { path: '', component: ReplayMigrateComponent }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ReplayMigrateRoutingModule { }
