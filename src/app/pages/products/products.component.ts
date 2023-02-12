import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { ApiService } from 'src/app/api.service';
import { Products } from 'src/app/model/products';
import { Utilities } from 'src/app/utils/utilities';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent {
  products: Products = {
    limit: 5,
    products: [],
    skip: 0,
    total: 0,
  };

  isLoading = true;

  constructor(
    private api: ApiService,
    private utilties: Utilities,
    private store: Store<{ checkout: Object }>
  ) {}

  ngOnInit() {
    this.utilties.isAuthenticate(`${window.location.origin}-e-com`);
    this.api.getProducts().subscribe((data: any) => {
      this.products = { ...data };
      this.isLoading = false;
    });
  }
}
