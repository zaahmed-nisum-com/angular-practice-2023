import { KeyValue } from '@angular/common';
import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { loadStripe } from '@stripe/stripe-js';
import { Observable } from 'rxjs';
import { addItemToCheckout } from 'src/app/model/actions/checkout.action';
import { StripeScriptTag } from 'stripe-angular';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css'],
})
export class CheckoutComponent {
  checkout: any = {};
  products: any = {};
  orderComplete = false;
  cardCaptureReady = false;
  invalidError: any = '';
  cardDetailsFilledOut: any = '';

  address: any = {
    fullName: '',
    address: '',
    country: '',
    city: '',
    state: '',
    zipCode: '',
  };

  constructor(
    private store: Store<{ checkout: Object }>,
    private stripeScriptTag: StripeScriptTag
  ) {
    store.select('checkout').subscribe((v: any) => {
      this.checkout = v;
      console.log(v.products);
      if (Object.keys(v.products).length > 0) {
        this.products = { ...v.products };
      }
    });
    stripeScriptTag
      .setPublishableKey(
        'pk_test_51MVyW8CkPo3tTGeTNJBnMMP7KBq7hy8QCOReyv1H9xEJLSI8sBZ5KGl9pp1Wsiiikvj8REJkf1KIys6uAQAK5axX00XLEX54dD'
      )
      .then(() => {
        console.log('publish key set');
        this.cardCaptureReady = true;
      });
  }

  onTextChangeHandle = (e: any) => {
    this.address = { ...this.address, [e.target.id]: e.target.value };
  };

  cardMounted = () => {
    console.log('cardMounted');
  };

  get productList(): Array<any> {
    return Object.values(this.products);
  }

  onStripeInvalid(error: Error) {
    console.log('Validation Error', error);
  }

  onStripeError(error: any) {
    console.error('Stripe error', error);
  }

  setPaymentMethod(token: stripe.paymentMethod.PaymentMethod) {
    console.log('Stripe Payment Method', token);
  }

  setStripeToken(token: stripe.Token) {
    console.log('Stripe Token', token);
  }

  setStripeSource(source: stripe.Source) {
    console.log('Stripe Source', source);
  }

  handleOrderConfirm = () => {
    this.orderComplete = !this.orderComplete;
  };
}
