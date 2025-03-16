import { AfterViewInit, Component } from '@angular/core';
import { MaterialModule } from '../../material.module';
import { UserManmagementTableComponent } from '../../components/user-manmagement-table/user-manmagement-table.component';
import { User_Model } from 'src/app/models/user.model';
import { Service_User } from 'src/app/services/user.service';

@Component({
  selector: 'app-user-manmagement',
  imports: [MaterialModule, UserManmagementTableComponent],
  templateUrl: './user-manmagement.html',
})

export class AppUserMamagementComponent implements AfterViewInit {

  constructor(private service_user: Service_User) {

  }
  goBack() {
    window.history.back();
  }
   async ngAfterViewInit(): Promise<void> {

  }
}

