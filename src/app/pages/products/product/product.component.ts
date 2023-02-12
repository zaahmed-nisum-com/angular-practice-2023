import { Component } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { map, Observable } from 'rxjs';
import { ApiService } from 'src/app/api.service';
import {
  addItemToCheckout,
  removeItemToCheckout,
} from 'src/app/model/actions/checkout.action';
import { ActivatedRoute } from '@angular/router';
import { Checkout } from 'src/app/model/checkout';
import { Products } from 'src/app/model/products';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
})
export class ProductComponent {
  checkout$: any = {};

  product: {
    id: 0;
    brand: '';
    description: '';
    price: '';
    rating: '';
    category: '';
    images: [];
    thumbnail: '';
  };
  isLoading = true;

  constructor(
    private api: ApiService,
    private store: Store<{ checkout: Checkout }>,
    private route: ActivatedRoute
  ) {
    store.select('checkout').subscribe((v) => {
      this.checkout$ = v;
    });
  }

  ngOnInit() {
    this.route.queryParams.subscribe((params) => {
      this.api.getProductById(params['id']).subscribe((data: any) => {
        this.product = { ...data };
        this.isLoading = false;
      });
    });
  }

  addItem(item: any) {
    this.store.dispatch(addItemToCheckout(item));
  }
  removeItem(item: any) {
    this.store.dispatch(removeItemToCheckout(item));
  }
}
