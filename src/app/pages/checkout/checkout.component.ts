import { KeyValue } from '@angular/common';
import { Component } from '@angular/core';
import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';
import { Store } from '@ngrx/store';
import { loadStripe } from '@stripe/stripe-js';
import { Observable } from 'rxjs';
import { addItemToOrderHistory } from 'src/app/model/actions/orderHistory.action';
import { StripeScriptTag } from 'stripe-angular';
import { FormControl } from '@angular/forms';
import { isValidName } from '../../utils/validations/nameValidation';
import { Checkout } from 'src/app/model/checkout';
import { OrderHistory } from 'src/app/model/orderHistory';

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
  orderDetails: any = {
    order:{},
    address:{}
  }

  address: any = {
    fullName: '',
    address: '',
    country: '',
    city: '',
    state: '',
    zipCode: '',
  };

  constructor(
    private store: Store<{ checkout: Checkout, orderHistory:OrderHistory }>,
    private stripeScriptTag: StripeScriptTag
  ) {
    store.select('orderHistory').subscribe((v: any) => {
      console.log(v);
    });
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
    this.validation(this.address);
    this.productList.map(item=>{
      this.orderDetails.order[item.id] = {...item}
    })
    this.orderDetails.address ={...this.address}
    this.orderDetails.checkout = {...this.checkout}
    console.log("orderHistory",this.orderDetails)
    this.store.dispatch(addItemToOrderHistory(this.orderDetails))
  };

  validation = (data: any) => {
    if (isValidName(data.fullName)) {
      console.log(isValidName(data.fullName));
    }
  };
}
