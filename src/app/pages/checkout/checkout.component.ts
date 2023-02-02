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
  orderComplete = false;

  constructor(private store: Store<{ checkout: Object }>) {
    store.select('checkout').subscribe((v: any) => {
      console.log(v);
      this.checkout = v;
      this.products = { ...v.products };
    });
  }

  all = (item: any) => {
    console.log(item);
    return 1;
  };

  handleOrderConfirm = () => {
    this.orderComplete = !this.orderComplete;
  };
}
