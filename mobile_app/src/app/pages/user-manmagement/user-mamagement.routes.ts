import { AppUserMamagementEditComponent } from './user-manmagement-edit.component';
import { AppUserMamagementCreateComponent } from './user-manmagement-create.component';
import { AppUserMamagementComponent } from './user-manmagement.component';
import { Routes } from '@angular/router';


export const UserMamagementRoutes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'admin',
        component: AppUserMamagementComponent,
      },
      {
        path: 'edit',
        component: AppUserMamagementEditComponent,
      },
      {
        path: 'create',
        component: AppUserMamagementCreateComponent,
      }
    ],
  },
];
