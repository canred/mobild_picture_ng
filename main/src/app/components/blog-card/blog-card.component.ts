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


// "description": "A beautiful landscape photo",
// "upload_datetime": "2025-03-08T09:37:41.775Z",
// "_id": "16c3645f-0d1f-41b0-8545-07c87f691b0d",
// "file_urt": "uploads/987a06e5-9d88-4ba4-8f81-d7e37ba658f0.jpeg"
interface photo_model {
  description?: string;
  upload_datetime?: string;
  _id?: string;
  file_urt?: string;
  classType?: string;
  tags?:string;
}

@Component({
  selector: 'app-blog-card',
  standalone: true,
  imports: [MatCardModule,CommonModule,MatButtonModule,MatIconModule, MatSelectModule, MatChipsModule, TablerIconsModule, MatButtonModule],
  templateUrl: './blog-card.component.html',
})
export class AppBlogCardsComponent implements AfterViewInit {
  public arrClassType: string[] = [];
  public arrPhotos: photo_model[] = [];
  constructor(private service_photo:Service_Photo) {}
  ngAfterViewInit() {
    this.service_photo.getAll_classType().subscribe((data) => {
      this.arrClassType = data as string[];
    });
    console.log('canred1');
    
    this.service_photo.getPhotos('class one','all').subscribe((data) => {
      
      this.arrPhotos = data as photo_model[];
      this.arrPhotos.forEach((photo) => {
        photo.file_urt = APP_CONFIG.API_WEB_ROOT + '/' + photo.file_urt;
      });
      console.log(this.arrPhotos);
    });

    

    
  }

  
}
