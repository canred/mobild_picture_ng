import { Component } from '@angular/core';
import { MaterialModule } from '../../material.module';
import { User_Model } from 'src/app/models/user.model';
import { PhotoManmagementTableComponent } from 'src/app/components/photo-manmagement-table/photo-manmagement-table.component';

@Component({
  selector: 'app-photo-manmagement',
  imports: [MaterialModule,PhotoManmagementTableComponent],
  templateUrl: './photo-manmagement.html',
})

export class AppPhotoMamagementComponent { }


