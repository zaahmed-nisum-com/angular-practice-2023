import { Component, OnInit } from '@angular/core';
import { AppService } from 'src/app/app.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent implements OnInit {
  constructor(private api: AppService) {}

  ngOnInit(): void {
    this.api.getCountries().subscribe((data) => {
      console.log(data);
    });
  }
}
