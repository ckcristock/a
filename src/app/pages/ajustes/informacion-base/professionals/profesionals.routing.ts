import { Routes, RouterModule } from '@angular/router';
import { ModalComponent } from './persons/modal/modal.component';
import { PersonsComponent } from './persons/persons.component';
import { ProfessionalsComponent } from './professionals.component';

const routes: Routes = [
  {
    path: '', component: PersonsComponent,
  },
  {
    path: 'create', component: ModalComponent
  }
];

export const ProfesionalsRoutes = RouterModule.forChild(routes);
