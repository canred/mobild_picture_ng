import { getLocaleCurrencyCode } from '@angular/common';
import { Injectable, signal } from '@angular/core';
import { Event, NavigationEnd, Router } from '@angular/router';
import { APP_CONFIG } from '../app-config';
import { HttpClient } from '@angular/common/http'; // 新增這行

@Injectable({ providedIn: 'root' })
export class Service_Photo {
  constructor(private router: Router, private http: HttpClient) {
    // this.router.events.subscribe((event: Event) => {
    //   if (event instanceof NavigationEnd) {
    //     this.currentUrl.set(event.urlAfterRedirects);
    //   }
    // });
  }

  public getAll_classType() {
    let api_root = APP_CONFIG.API_ROOT + '/photo/getClassType';
    return this.http.get(api_root); // 修正這行
  }

  public getPhotos(classType: string,searchKey: string) {
    if (searchKey == '') {
      searchKey = 'all';
    }
    let api_root = APP_CONFIG.API_ROOT + `/photo/search/${classType}/${searchKey}`;
    return this.http.get(api_root); // 修正這行
  }
}
