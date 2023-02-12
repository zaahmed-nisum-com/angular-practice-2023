import { Component, ErrorHandler } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/api.service';
import { CookiesStorageModel } from 'src/app/utils/coockies/coockies';
import { SessionStorageService } from 'src/app/utils/session/sessions';
import { Utilities } from 'src/app/utils/utilities';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  email: String = '';
  password: String = '';
  isLoading = false;

  constructor(
    private api: ApiService,
    private _router: Router,
    private session: SessionStorageService,
    private cookies: CookiesStorageModel,
    private utilties: Utilities
  ) {}

  ngOnInit() {
    this.utilties.isAuthenticate(`${window.location.origin}-e-com`);
  }

  login = () => {
    try {
      this.isLoading = true;
      this.api
        .loginUser({ email: this.email, password: this.password })
        .subscribe((data: any) => {
          const authResponse = {
            userName: 'zain ahmed',
            email: 'zain.ahned@gmail.com',
            token: '9qn4foiun43hg0ionrg934g',
            role: 'user',
            tokenExpire: new Date().setHours(new Date().getHours() + 1),
          };
          this.session.createSession(
            `${window.location.origin}-e-com`,
            authResponse
          );
          this.cookies.createCoockies(
            `${window.location.origin}-e-com`,
            authResponse
          );
          this.isLoading = false;
          this._router.navigateByUrl('/products');
        });
    } catch (error: any) {}
  };
}
