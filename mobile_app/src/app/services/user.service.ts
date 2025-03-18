import { getLocaleCurrencyCode } from '@angular/common';
import { Injectable, signal } from '@angular/core';
import { Event, NavigationEnd, Router } from '@angular/router';
import { APP_CONFIG } from '../app-config';
import { HttpClient } from '@angular/common/http'; // 新增這行
import { User_Model } from '../models/user.model';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class Service_User {
  constructor(private router: Router, private http: HttpClient) {
    // this.router.events.subscribe((event: Event) => {
    //   if (event instanceof NavigationEnd) {
    //     this.currentUrl.set(event.urlAfterRedirects);
    //   }
    // });
  }

  /**
   * 通過向用戶註冊端點發送POST請求來登錄用戶。
   *
   * @param {User_Model} pUser - 包含用戶詳細信息的用戶模型。
   * @returns {Observable<any>} 包含HTTP響應的可觀察對象。
   */
  public login_user(pUser: User_Model) {
    let api_root = APP_CONFIG.API_ROOT + '/user/register';
    return this.http.post(api_root, pUser); // 修正這行
  }

  /**
   * Registers a new user by sending a POST request to the API.
   *
   * @param {User_Model} pUser - The user model containing the registration details.
   * @returns {Observable<any>} An observable of the HTTP response.
   */

  /**
   * 根據給定的關鍵字檢索用戶。
   *
   * @param {string} keyword - 用於搜索用戶的關鍵字。
   * @returns {Promise<User_Model[]>} 包含用戶數據的Promise對象。
   */
  public async get_user_by_keyword(keyword: string) : Promise<User_Model[] | undefined> {
    if (keyword == '') {
      keyword = '{keyword}';
    }
    let api_root = APP_CONFIG.API_ROOT + '/user/keyword/' + keyword;
    const drs = await this.http.get<Array<User_Model>>(api_root).toPromise();
    return drs;
  }

  /**
   * 根據用戶ID檢索用戶信息。
   *
   * @param {string} id - 用戶的唯一標識符。
   * @returns {Observable<any>} 包含用戶數據的可觀察對象。
   */
  public get_user_by_id(id: string) {
    let api_root = APP_CONFIG.API_ROOT + '/user/' + id;
    return this.http.get<User_Model>(api_root).toPromise(); // 修正這行
  }

  /**
   * 更新用戶信息，通過向服務器發送POST請求。
   *
   * @param {User_Model} pUser - 包含更新後用戶信息的用戶模型。
   * @returns {Observable<any>} 包含服務器響應的可觀察對象。
   */
  public update_user(pUser: User_Model) {
    let api_root = APP_CONFIG.API_ROOT + '/user/edit';
    return this.http.put(api_root, pUser); // 修正這行
  }

  /**
   * 根據用戶名刪除用戶。
   *
   * @param {User_Model} pUser - 包含要刪除用戶名的用戶模型。
   * @returns {Observable<any>} 包含HTTP刪除請求的可觀察對象。
   */
  public delete_user(pUser: User_Model) {
    let api_root = APP_CONFIG.API_ROOT + '/user/delete/' + pUser.username;
    return this.http.delete(api_root); // 修正這行
  }


  public delete_user_by_id(_id:string) {
    let api_root = APP_CONFIG.API_ROOT + '/user/delete_by_id/' + _id;
    return this.http.delete(api_root); // 修正這行
  }

  public create_user(pUser: User_Model) {
    let api_root = APP_CONFIG.API_ROOT + '/user/register';
    return this.http.post(api_root, pUser); // 修正這行
  }


}
