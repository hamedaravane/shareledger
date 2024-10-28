import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./component/main.component').then((c) => c.MainComponent),
  },
];
