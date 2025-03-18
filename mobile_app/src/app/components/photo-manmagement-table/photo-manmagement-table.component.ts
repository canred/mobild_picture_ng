import { CommonModule, DatePipe } from '@angular/common';
import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';
import { MaterialModule } from 'src/app/material.module';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { Album_model } from 'src/app/models/album.model';
import { Service_Album } from 'src/app/services/album.service';



const drs_album: Album_model[] = [];

@Component({
  selector: 'app-photo-manmagement-table',
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
  templateUrl: './photo-manmagement-table.html',
})
export class PhotoManmagementTableComponent {
  public drs: Album_model[] | undefined = [];
    constructor(private service_album: Service_Album, private datePipe: DatePipe) { }

  displayedColumns1: string[] = [ 'photo_name', 'photo_desc', 'photo_order','photo_updateAt'];
  dataSource1 = drs_album;
  openDialog() {
    alert('Dialog opened');
  }
  async applyFilter(event: Event) {
    this.find_user_by_keyword((event.target as HTMLInputElement).value);
  }

  public async find_user_by_keyword(keyword: string) {
    this.drs = await this.service_album.get_album_by_keyword(keyword);
    if (this.drs == undefined) {
      // 表示沒有找到用戶
      this.drs = [];
    } else {
      await this.drs.forEach((user) => {
        if (user.photo_updateAt)
          user.photo_updateAt = this.datePipe.transform(new Date(user.photo_updateAt!), 'yyyy-MM-dd HH:mm')!;

      });
      this.drs.sort((a, b) => {
        return a.photo_updateAt!.localeCompare(b.photo_updateAt!);
      });
      this.dataSource1 = this.drs;
    }
  }

  async ngAfterViewInit(): Promise<void> {
    this.find_user_by_keyword('');
  }

  deleteUser(user_id: string) {
    if (confirm('Are you sure you want to delete this user?')) {
      this.service_album.delete_album_by_id(user_id).subscribe(
        (response) => {
          alert('User deleted successfully');
          this.find_user_by_keyword('');
        },
        (error) => {
          alert('Error deleting user');
        }
      );
    }
  }
}
