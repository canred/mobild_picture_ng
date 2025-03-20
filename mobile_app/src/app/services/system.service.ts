import { getLocaleCurrencyCode } from '@angular/common';
import { Injectable, signal } from '@angular/core';
import { Event, NavigationEnd, Router } from '@angular/router';
import { APP_CONFIG } from '../app-config';
import { HttpClient } from '@angular/common/http'; // 新增這行
import { User_Model } from '../models/user.model';
import { Observable } from 'rxjs';
import { Album_Model } from '../models/album.model';
import { Disk_Model } from '../models/disk.model';

@Injectable({ providedIn: 'root' })
export class Service_System {
  constructor(private router: Router, private http: HttpClient) {
    // this.router.events.subscribe((event: Event) => {
    //   if (event instanceof NavigationEnd) {
    //     this.currentUrl.set(event.urlAfterRedirects);
    //   }
    // });
  }

  public async get_disk_info() : Promise<Disk_Model[] | undefined> {
    let api_root = APP_CONFIG.API_ROOT + '/system/disk/info';
    const drs:any = await this.http.get(api_root).toPromise();
    let drs_disk: Disk_Model[] = [];
    if (drs['disks']) {
      drs['disks'].forEach((element:any) => {
        let  tmp : Disk_Model = new Disk_Model();
        tmp.disk_name = element.disk_name;
        tmp.totalSpace = element.totalSpace;
        tmp.usedSpace = element.usedSpace;
        tmp.usageRate = element.usageRate;
        drs_disk.push(tmp);
      });
    }
    return drs_disk;
  }


}
