import { Service_User } from './../../services/user.service';
import { CommonModule } from '@angular/common';
import { AfterViewInit, Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';
import { MaterialModule } from 'src/app/material.module';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { User_Model } from 'src/app/models/user.model';



const USERS_DATA: User_Model[] = [
  { username: 'user1', password: 'pass1', email: 'user1@example.com', createdAt: new Date(), updatedAt: new Date() },
  { username: 'user2', password: 'pass2', email: 'user2@example.com', createdAt: new Date(), updatedAt: new Date() },
  { username: 'user3', password: 'pass3', email: 'user3@example.com', createdAt: new Date(), updatedAt: new Date() },
  { username: 'user4', password: 'pass4', email: 'user4@example.com', createdAt: new Date(), updatedAt: new Date() },
  { username: 'user5', password: 'pass5', email: 'user5@example.com', createdAt: new Date(), updatedAt: new Date() },
  { username: 'user6', password: 'pass6', email: 'user6@example.com', createdAt: new Date(), updatedAt: new Date() },
  { username: 'user7', password: 'pass7', email: 'user7@example.com', createdAt: new Date(), updatedAt: new Date() },
  { username: 'user8', password: 'pass8', email: 'user8@example.com', createdAt: new Date(), updatedAt: new Date() },
  { username: 'user9', password: 'pass9', email: 'user9@example.com', createdAt: new Date(), updatedAt: new Date() },
  { username: 'user10', password: 'pass10', email: 'user10@example.com', createdAt: new Date(), updatedAt: new Date() },
  { username: 'user11', password: 'pass11', email: 'user11@example.com', createdAt: new Date(), updatedAt: new Date() },
  { username: 'user12', password: 'pass12', email: 'user12@example.com', createdAt: new Date(), updatedAt: new Date() },
  { username: 'user13', password: 'pass13', email: 'user13@example.com', createdAt: new Date(), updatedAt: new Date() },
  { username: 'user14', password: 'pass14', email: 'user14@example.com', createdAt: new Date(), updatedAt: new Date() },
  { username: 'user15', password: 'pass15', email: 'user15@example.com', createdAt: new Date(), updatedAt: new Date() },
  { username: 'user16', password: 'pass16', email: 'user16@example.com', createdAt: new Date(), updatedAt: new Date() },
  { username: 'user17', password: 'pass17', email: 'user17@example.com', createdAt: new Date(), updatedAt: new Date() },
  { username: 'user18', password: 'pass18', email: 'user18@example.com', createdAt: new Date(), updatedAt: new Date() },
  { username: 'user19', password: 'pass19', email: 'user19@example.com', createdAt: new Date(), updatedAt: new Date() },
  { username: 'user20', password: 'pass20', email: 'user20@example.com', createdAt: new Date(), updatedAt: new Date() },
  { username: 'user21', password: 'pass21', email: 'user21@example.com', createdAt: new Date(), updatedAt: new Date() },
  { username: 'user22', password: 'pass22', email: 'user22@example.com', createdAt: new Date(), updatedAt: new Date() },
  { username: 'user23', password: 'pass23', email: 'user23@example.com', createdAt: new Date(), updatedAt: new Date() },
  { username: 'user24', password: 'pass24', email: 'user24@example.com', createdAt: new Date(), updatedAt: new Date() },
  { username: 'user25', password: 'pass25', email: 'user25@example.com', createdAt: new Date(), updatedAt: new Date() },
  { username: 'user26', password: 'pass26', email: 'user26@example.com', createdAt: new Date(), updatedAt: new Date() },
  { username: 'user27', password: 'pass27', email: 'user27@example.com', createdAt: new Date(), updatedAt: new Date() },
  { username: 'user28', password: 'pass28', email: 'user28@example.com', createdAt: new Date(), updatedAt: new Date() },
  { username: 'user29', password: 'pass29', email: 'user29@example.com', createdAt: new Date(), updatedAt: new Date() },
  { username: 'user30', password: 'pass30', email: 'user30@example.com', createdAt: new Date(), updatedAt: new Date() },
];

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
  templateUrl: './user-manmagement-table.component.html',
})
export class UserManmagementTableComponent implements AfterViewInit {
  public drs: User_Model[] | undefined = [];
  constructor( private service_user:Service_User ) {}
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
    }
  }

}
