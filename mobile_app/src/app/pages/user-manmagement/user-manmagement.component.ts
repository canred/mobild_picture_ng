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

   async ngAfterViewInit(): Promise<void> {
    let drs = await  this.service_user.get_user_by_keyword('');
    debugger;
    console.log(drs);

  }
}

