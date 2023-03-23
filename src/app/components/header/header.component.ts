import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Checkout } from 'src/app/model/checkout';
import { CookiesStorageModel } from 'src/app/utils/coockies/coockies';
import { SessionStorageService } from 'src/app/utils/session/sessions';
import { Utilities } from 'src/app/utils/utilities';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  totalProductsInCart = 0;
  isAuthentiacate = true;

  constructor(
    private utilties: Utilities,
    private session: SessionStorageService,
    private coockies: CookiesStorageModel,
    private store: Store<{ checkout: Checkout }>
  ) {
    store.select('checkout').subscribe((v) => {
      this.totalProductsInCart = Object.keys(v.products).length;
    });
  }

  ngOnInit() {
    console.log(this.coockies.getCookies(`${window.location.origin}-e-com`) )
    console.log(this.session.getSession(`${window.location.origin}-e-com`) )
    if (
      this.coockies.getCookies(`${window.location.origin}-e-com`) == null &&
      this.session.getSession(`${window.location.origin}-e-com`) == null
    ) {
      this.isAuthentiacate = false;
    }
  }
}
