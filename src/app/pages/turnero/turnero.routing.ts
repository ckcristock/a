import { Routes, RouterModule } from '@angular/router';
import { TurneroComponent } from './turnero.component';

const routes: Routes = [
  { path: '', component: TurneroComponent },
];

export const TurneroRoutes = RouterModule.forChild(routes);
