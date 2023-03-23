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
import { ThankyouOrderConfirmComponent } from './components/thankyou-order-confirm/thankyou-order-confirm.component';
import { StripeModule } from 'stripe-angular';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { LoaderComponent } from './components/loader/loader.component';
import { LoginComponent } from './pages/login/login.component';
import { CookieService } from 'ngx-cookie-service';
import { UserProfileComponent } from './pages/user-profile/user-profile.component';
import { WishlistComponent } from './pages/components/wishlist/wishlist.component';
import { orderHistoryReducer } from './reducers/orderHistory.reducer';
import { OrderHistoryComponent } from './pages/order-history/order-history.component';
import { OrderHistoryCardComponent } from './components/cards/order-history-card/order-history-card.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    ButtonComponent,
    ProductComponent,
    HeaderComponent,
    FooterComponent,
    CheckoutComponent,
    ThankyouOrderConfirmComponent,
    LoaderComponent,
    LoginComponent,
    UserProfileComponent,
    WishlistComponent,
    OrderHistoryComponent,
    OrderHistoryCardComponent,
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    StoreModule.forRoot({
      checkout: checkoutReducer,
      orderHistory: orderHistoryReducer
    }),
    StripeModule.forRoot(
      'pk_test_51MVyW8CkPo3tTGeTNJBnMMP7KBq7hy8QCOReyv1H9xEJLSI8sBZ5KGl9pp1Wsiiikvj8REJkf1KIys6uAQAK5axX00XLEX54dD'
    ),
  ],
  providers: [CookieService],
  bootstrap: [AppComponent],
})
export class AppModule {}
