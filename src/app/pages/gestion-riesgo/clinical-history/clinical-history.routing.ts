import { Routes, RouterModule } from '@angular/router';
import { ClinicalHistoryComponent } from './clinical-history.component';
import { DeepDetailComponent } from './deep-detail/deep-detail.component';

const routes: Routes = [
  {
    path: '', component: ClinicalHistoryComponent

  },
  {
    path: 'deep-detail/:id', component: DeepDetailComponent
  }
];

export const ClinicalHistoryRoutes = RouterModule.forChild(routes);
