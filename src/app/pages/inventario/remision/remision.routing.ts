import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { RemisionComponent } from './remision.component';
import { RemisioncrearnuevoComponent } from './remisioncrearnuevo/remisioncrearnuevo.component';

const routes: Routes = [
  {
    path: '', component: RemisionComponent
  },
  {
    path: 'remisioncrearnuevo', component: RemisioncrearnuevoComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RemisionRoutes { };
