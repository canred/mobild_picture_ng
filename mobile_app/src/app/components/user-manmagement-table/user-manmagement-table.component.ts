import { Service_User } from './../../services/user.service';
import { CommonModule, DatePipe } from '@angular/common';
import { AfterViewInit, Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';
import { MaterialModule } from 'src/app/material.module';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { User_Model } from 'src/app/models/user.model';



const USERS_DATA: User_Model[] = [];

@Component({
  selector: 'app-user-manmagement-table',
  imports: [
    MatTableModule,
    CommonModule,
    MatCardModule,
    MaterialModule,
    MatIconModule,
    MatMenuModule,
    MatButtonModule,
  ],
  providers: [DatePipe],
  templateUrl: './user-manmagement-table.component.html',
})
export class UserManmagementTableComponent implements AfterViewInit {
  public drs: User_Model[] | undefined = [];
  constructor( private service_user:Service_User, private datePipe: DatePipe ) {}
  // table 1
  displayedColumns1: string[] = [ 'username', 'email', 'updatedAt','action'];
  dataSource1 = USERS_DATA;
  openDialog() {
    alert('Dialog opened');
  }
  applyFilter(event: Event) {}

  async ngAfterViewInit(): Promise<void> {
    this.drs = await this.service_user.get_user_by_keyword('');
    if(this.drs == undefined){
      // 表示沒有找到用戶
      this.drs = [];
    }else{
      await this.drs.forEach((user) => {
        if(user.updatedAt )
          user.updatedAt = this.datePipe.transform(new Date(user.updatedAt!), 'yyyy-MM-dd HH:mm')!;
        if(user.createdAt )
          user.createdAt = this.datePipe.transform(new Date(user.createdAt!), 'yyyy-MM-dd HH:mm')!;
      });
      this.dataSource1 = this.drs;
    }
  }

}
