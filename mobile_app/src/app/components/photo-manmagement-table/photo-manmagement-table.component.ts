import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';
import { MaterialModule } from 'src/app/material.module';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { User_Model } from 'src/app/models/user.model';



const USERS_DATA: User_Model[] = [];

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
  templateUrl: './photo-manmagement-table.html',
})
export class PhotoManmagementTableComponent {
  // table 1
  displayedColumns1: string[] = [ 'username', 'email', 'updatedAt','action'];
  dataSource1 = USERS_DATA;
  openDialog() {
    alert('Dialog opened');
  }
  applyFilter(event: Event) {}
}
