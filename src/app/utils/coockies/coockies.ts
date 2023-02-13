import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root',
})
export class CookiesStorageModel {
  constructor(private cookieService: CookieService) {}

  getCookies = (key: string) => {
    return JSON.parse(this.cookieService.get(key) || 'null');
  };
  createCoockies = (key: string, value: object) => {
    this.cookieService.set(key, JSON.stringify(value));
  };
  deleteCoockies = (key: any) => {
    this.cookieService.delete(key);
  };
}
