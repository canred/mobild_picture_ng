import { AppphotoMamagementCreateComponent } from './photo-manmagement-create.component';
import { AppPhotoMamagementEditComponent } from './photo-manmagement-edit.component';
import { AppPhotoMamagementComponent } from './photo-manmagement.component';
import { Routes } from '@angular/router';


export const PhotoMamagementRoutes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'admin',
        component: AppPhotoMamagementComponent,
      },
      {
        path: 'edit',
        component: AppPhotoMamagementEditComponent
      },
      {
        path: 'create',
        component: AppphotoMamagementCreateComponent,
      }
    ],
  },
];
