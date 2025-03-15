import { Component } from '@angular/core';
import { MaterialModule } from '../../material.module';
import { UserManmagementTableComponent } from '../../components/user-manmagement-table/user-manmagement-table.component';
import { User_Model } from 'src/app/models/user.model';

@Component({
  selector: 'app-user-manmagement',
  imports: [MaterialModule,UserManmagementTableComponent],
  templateUrl: './user-manmagement.html',
})

export class AppUserMamagementComponent { }


