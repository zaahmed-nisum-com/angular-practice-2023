import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CheckoutComponent } from './pages/checkout/checkout.component';
import { LoginComponent } from './pages/login/login.component';
import { ProductComponent } from './pages/products/product/product.component';
import { ProductsComponent } from './pages/products/products.component';
import { UserProfileComponent } from './pages/user-profile/user-profile.component';

const routes: Routes = [
  { path: 'products', component: ProductsComponent },
  { path: 'product', component: ProductComponent },
  { path: 'checkout', component: CheckoutComponent },
  { path: 'login', component: LoginComponent },
  { path: 'profile', component: UserProfileComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
