import { Checkout } from '../model/checkout';
import { Products } from '../model/products';

export interface State {
  checkout: Checkout;
  products: Object;
}
