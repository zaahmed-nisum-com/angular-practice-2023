import { Component } from '@angular/core';
import { ApiService } from 'src/app/api.service';
import { Products } from 'src/app/model/products';

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
  constructor(private api: ApiService) {}

  ngOnInit() {
    this.api.getProducts().subscribe((data: any) => {
      this.products = { ...data };
    });
  }
}