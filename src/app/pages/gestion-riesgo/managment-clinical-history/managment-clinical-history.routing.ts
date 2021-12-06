import { Routes, RouterModule } from '@angular/router';
import { EditClinicalModelComponent } from './edit-clinical-model/edit-clinical-model.component';
import { ManagmentClinicalHistoryComponent } from './managment-clinical-history.component';
import { VariablesClinicalModelComponent } from './variables-clinical-model/variables-clinical-model.component';

const routes: Routes = [
  { path: '', component: ManagmentClinicalHistoryComponent },
  { path: 'edit/:id', component: EditClinicalModelComponent },
  { path: 'params/:id', component: VariablesClinicalModelComponent },
]


export const ManagmentClinicalHistoryRoutes = RouterModule.forChild(routes);
