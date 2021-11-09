import { Routes, RouterModule } from '@angular/router';
import { GraficalModuleComponent } from './grafical-module.component';

const routes: Routes = [
  { path: '', component: GraficalModuleComponent },
];

export const GraficalModuleRoutes = RouterModule.forChild(routes);
