import { CommonModule, DatePipe } from '@angular/common';
import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';
import { MaterialModule } from 'src/app/material.module';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { Album_Model } from 'src/app/models/album.model';
import { Service_Album } from 'src/app/services/album.service';
import { ToastrService } from 'ngx-toastr';



const drs_album: Album_Model[] = [];

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
  providers: [DatePipe,],
  templateUrl: './photo-manmagement-table.html',
})
export class PhotoManmagementTableComponent {
  public drs: Album_Model[] | undefined = [];
    constructor(private service_album: Service_Album, private datePipe: DatePipe,private toastr: ToastrService) { }

  displayedColumns1: string[] = [ 'photo_name', 'photo_desc', 'photo_order','photo_updateAt','action'];
  dataSource1 = drs_album;

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
        return a.photo_order > b.photo_order ? 1 : -1;
      });
      this.dataSource1 = this.drs;
    }
  }

  async ngAfterViewInit(): Promise<void> {
    this.find_user_by_keyword('');
  }

  deleteAlbum(album_id: string) {
    if (confirm('Are you sure you want to delete this album?')) {
      this.service_album.delete_album_by_id(album_id).subscribe(
        (response) => {
          this.toastr.success('Album deleted successfully');
          this.find_user_by_keyword('');
        },
        (error) => {
          this.toastr.error('Error deleting user');
        }
      );
    }
  }

}
