import { Checkout } from '../model/checkout';
import { Products } from '../model/products';

export interface State {
  readonly checkout: Object;
  readonly products: Object;
}
