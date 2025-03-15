import { AppPhotoMamagementComponent } from './photo-manmagement.component';
import { Routes } from '@angular/router';


export const PhotoMamagementRoutes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'admin',
        component: AppPhotoMamagementComponent,
      }
    ],
  },
];
