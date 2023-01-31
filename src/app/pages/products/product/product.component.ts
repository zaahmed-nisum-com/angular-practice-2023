import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { ApiService } from 'src/app/api.service';
import {
  addItemToCheckout,
  removeItemToCheckout,
} from 'src/app/model/actions/checkout.action';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
})
export class ProductComponent {
  checkout$: Observable<Object>;

  constructor(
    private api: ApiService,
    private store: Store<{ checkout: Object }>,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.route.queryParams.subscribe((params) => {
      console.log(params); // { orderby: "price" }
    });
  }

  addItem(item: any) {
    console.log(item);
    this.store.dispatch(addItemToCheckout());
  }
  removeItem(item: any) {
    console.log(item);
    this.store.dispatch(removeItemToCheckout());
  }
}
