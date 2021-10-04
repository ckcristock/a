import { Routes, RouterModule } from '@angular/router';
import { ProfessionalsComponent } from './professionals.component';

const routes: Routes = [
  {
    path: '', component: ProfessionalsComponent
  },
];

export const ProfesionalsRoutes = RouterModule.forChild(routes);
