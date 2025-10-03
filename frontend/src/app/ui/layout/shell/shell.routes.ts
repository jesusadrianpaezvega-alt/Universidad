import { Routes } from '@angular/router';
import { ShellComponent } from './shell';

export const routes: Routes = [
  {
    path: '',
    component: ShellComponent,
    children: [
      {
        path: 'equipment',
        loadComponent: () =>
          import('../../features/equipment/pages/equipment-list/equipment-list.page')
            .then(m => m.EquipmentListPage),
      },
      { path: '', pathMatch: 'full', redirectTo: 'equipment' },
      { path: '**', redirectTo: 'equipment' },
    ],
  },
];
