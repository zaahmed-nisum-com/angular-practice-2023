import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Checkout } from 'src/app/model/checkout';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  totalProductsInCart = 0;

  constructor(private store: Store<{ checkout: Checkout }>) {
    store.select('checkout').subscribe((v) => {
      this.totalProductsInCart = Object.keys(v.products).length;
    });
  }
}
