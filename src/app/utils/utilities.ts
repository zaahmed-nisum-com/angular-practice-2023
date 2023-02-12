import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { CookiesStorageModel } from './coockies/coockies';
import { SessionStorageService } from './session/sessions';

@Injectable({
  providedIn: 'root',
})
export class Utilities {
  constructor(
    private session: SessionStorageService,
    private cookies: CookiesStorageModel,
    private router: Router
  ) {}

  isAuthenticate = (key: string) => {
    const session: {
      tokenExpire: string;
    } = this.session.getSession(key);
    const coockies = this.cookies.getCookies(key);
    if (session !== null && coockies !== null) {
      if (new Date() > new Date(session.tokenExpire)) {
        this.router.navigateByUrl('/login');
      } else {
        this.router.navigateByUrl('/products');
      }
    } else {
      this.router.navigateByUrl('/login');
    }
  };
}
