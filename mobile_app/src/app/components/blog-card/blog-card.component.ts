import { AfterViewInit, Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';
import { TablerIconsModule } from 'angular-tabler-icons';
import { APP_CONFIG } from '../../app-config';
import { Service_Photo } from 'src/app/services/photo.service';
import { CommonModule } from '@angular/common';
import { MatSelectModule } from '@angular/material/select';
import { MatIconModule } from '@angular/material/icon';
import { photo_model } from '../../models/photo.model';

@Component({
  selector: 'app-blog-card',
  standalone: true,
  imports: [MatCardModule,CommonModule,MatButtonModule,MatIconModule, MatSelectModule, MatChipsModule, TablerIconsModule, MatButtonModule],
  templateUrl: './blog-card.component.html',
})
export class AppBlogCardsComponent implements AfterViewInit {
  // 照片的分類類型
  public arrClassType: string[] = [];
  // 照片的內容
  public arrPhotos: photo_model[] = [];
  // 注入 Service_Photo 服務
  constructor(private service_photo:Service_Photo) {}

  ngAfterViewInit() {
    // 獲取所有的分類類型
    this.service_photo.getAll_classType().subscribe((data) => {
      this.arrClassType = data as string[];
    });

    // 獲取所有照片，並更新照片的 URL
    // class one 是分類類型
    // all 是標籤 ， 如果是 all 就是全部
    this.service_photo.getPhotos('class one','all').subscribe((data) => {
      this.arrPhotos = data as photo_model[];
      this.arrPhotos.forEach((photo) => {
        photo.file_urt = APP_CONFIG.API_WEB_ROOT + '/' + photo.file_urt;
      });
    });
  }
}
