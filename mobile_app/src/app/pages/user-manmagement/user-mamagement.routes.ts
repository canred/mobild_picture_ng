import { AppUserMamagementComponent } from './user-manmagement.component';
import { Routes } from '@angular/router';


export const UserMamagementRoutes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'admin',
        component: AppUserMamagementComponent,
      }
    ],
  },
];
