import { getLocaleCurrencyCode } from '@angular/common';
import { Injectable, signal } from '@angular/core';
import { Event, NavigationEnd, Router } from '@angular/router';
import { APP_CONFIG } from '../app-config';
import { HttpClient } from '@angular/common/http'; // 新增這行
import { User_Model } from '../models/user.model';
import { Observable } from 'rxjs';
import { Album_Model } from '../models/album.model';

@Injectable({ providedIn: 'root' })
export class Service_Album {
  constructor(private router: Router, private http: HttpClient) {
    // this.router.events.subscribe((event: Event) => {
    //   if (event instanceof NavigationEnd) {
    //     this.currentUrl.set(event.urlAfterRedirects);
    //   }
    // });
  }

  /**
   * 根據給定的關鍵字檢索相簿。
   *
   * @param {string} keyword - 用於搜索相簿的關鍵字。
   * @returns {Promise<Album_model[]>} 包含相簿數據的Promise對象。
   */
  public async get_album_by_keyword(keyword: string) : Promise<Album_Model[] | undefined> {
    if (keyword == '') {
      keyword = '{keyword}';
    }
    let api_root = APP_CONFIG.API_ROOT + '/album/keyword/' + keyword;
    const drs = await this.http.get<Array<Album_Model>>(api_root).toPromise();
    return drs;
  }

  /**
   * 根據相簿ID檢索相簿信息。
   *
   * @param {string} id - 相簿的唯一標識符。
   * @returns {Observable<any>} 包含相簿數據的可觀察對象。
   */
  public get_album_by_id(id: string) {
    let api_root = APP_CONFIG.API_ROOT + '/album/' + id;
    return this.http.get<Album_Model>(api_root).toPromise(); // 修正這行
  }

  /**
   * 更新相簿信息，通過向服務器發送POST請求。
   *
   * @param {Album_Model} pAlbum - 包含更新後相簿信息的相簿模型。
   * @returns {Observable<any>} 包含服務器響應的可觀察對象。
   */
  public update_album(pAlbum: Album_Model) {
    let api_root = APP_CONFIG.API_ROOT + '/album/edit';
    return this.http.put(api_root, pAlbum); // 修正這行
  }


  public delete_album_by_id(_id:string) {
    let api_root = APP_CONFIG.API_ROOT + '/album/delete_by_id/' + _id;
    return this.http.delete(api_root); // 修正這行
  }

  public create_album(pAlbum: Album_Model) {
    let api_root = APP_CONFIG.API_ROOT + '/album/register';
    return this.http.post(api_root, pAlbum); // 修正這行
  }


}
