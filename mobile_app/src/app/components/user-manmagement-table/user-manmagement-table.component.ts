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
import { ToastrService } from 'ngx-toastr';

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
  constructor(private service_user: Service_User, private datePipe: DatePipe,private toastr: ToastrService) { }
  displayedColumns1: string[] = ['username', 'email', 'updatedAt', 'action'];
  dataSource1 = USERS_DATA;

  async applyFilter(event: Event) {
    this.find_user_by_keyword((event.target as HTMLInputElement).value);
  }

  public async find_user_by_keyword(keyword: string) {
    this.drs = await this.service_user.get_user_by_keyword(keyword);
    if (this.drs == undefined) {
      // 表示沒有找到用戶
      this.drs = [];
    } else {
      await this.drs.forEach((user) => {
        if (user.updatedAt)
          user.updatedAt = this.datePipe.transform(new Date(user.updatedAt!), 'yyyy-MM-dd HH:mm')!;
        if (user.createdAt)
          user.createdAt = this.datePipe.transform(new Date(user.createdAt!), 'yyyy-MM-dd HH:mm')!;
      });
      this.drs.sort((a, b) => {
        return a.username.localeCompare(b.username);
      });
      this.dataSource1 = this.drs;
    }
  }

  async ngAfterViewInit(): Promise<void> {
    this.find_user_by_keyword('');
  }

  deleteUser(user_id: string) {
    if (confirm('Are you sure you want to delete this user?')) {
      this.service_user.delete_user_by_id(user_id).subscribe(
        (response) => {
          this.toastr.success('User deleted successfully');
          this.find_user_by_keyword('');
        },
        (error) => {
          this.toastr.error('Error deleting user');
        }
      );
    }
  }
}
