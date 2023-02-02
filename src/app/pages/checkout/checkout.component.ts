import { KeyValue } from '@angular/common';
import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { loadStripe } from '@stripe/stripe-js';
import { Observable } from 'rxjs';
import { addItemToCheckout } from 'src/app/model/actions/checkout.action';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css'],
})
export class CheckoutComponent {
  checkout: any = {};
  products: any = {};
  productKeys: any = [];
  orderComplete = false;

  constructor(private store: Store<{ checkout: Object }>) {
    store.select('checkout').subscribe((v: any) => {
      console.log(v);
      this.checkout = v;
      if (Object.keys(v.products).length > 0) {
        this.productKeys = Object.keys(v.products);
        this.products = { ...v.products };
      }
    });
  }

  // funcFilter = (a: KeyValue<number, object>, b: KeyValue<number, object>) => {
  //   console.log(a);
  //   console.log(b);
  //   return 0;
  // };

  handleOrderConfirm = () => {
    this.orderComplete = !this.orderComplete;
  };
}
