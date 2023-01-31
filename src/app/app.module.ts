import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductsComponent } from './pages/products/products.component';
import { ButtonComponent } from './components/button/button.component';
import { HttpClientModule } from '@angular/common/http';
import { ProductComponent } from './pages/products/product/product.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { CheckoutComponent } from './pages/checkout/checkout.component';
import { StoreModule } from '@ngrx/store';
import { checkoutReducer } from './reducers/checkout.reducer';

@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    ButtonComponent,
    ProductComponent,
    HeaderComponent,
    FooterComponent,
    CheckoutComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    StoreModule.forRoot(
      {
        checkout: checkoutReducer,
      },
      {}
    ),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
