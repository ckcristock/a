import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ApplyComponent } from './encuestas/apply/apply.component';

const routes: Routes = [
    { path: 'apply', component: ApplyComponent },
    { path: 'taskmanager', loadChildren: () => import('../layouts/shared/task-manager/task-manager.component').then(m => m.TaskManagerComponent) },

];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class PublicRoutingModule { }
