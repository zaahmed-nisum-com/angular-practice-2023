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
  // async ngOnInit() {
  //   console.log('ngOnInit');
  //   const stripe = await loadStripe(
  //     'pk_test_51MVyW8CkPo3tTGeTNJBnMMP7KBq7hy8QCOReyv1H9xEJLSI8sBZ5KGl9pp1Wsiiikvj8REJkf1KIys6uAQAK5axX00XLEX54dD'
  //   );
  //   const card = stripe
  //     ?.elements({
  //       clientSecret:
  //         'sk_test_51MVyW8CkPo3tTGeTYCjGaCwyy1D9gYKrsfTFuo5n47DRAe2P84xPTR3luInEziqjpm5ArfnbIrGLpsHtBvNckW4u00VfMidxI0',
  //     })
  //     .create('card');
  //   card?.mount('#card-element');
  // }
}
