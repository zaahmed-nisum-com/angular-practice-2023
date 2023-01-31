import { Checkout } from '../model/checkout';
import {
  addItemToCheckout,
  removeItemToCheckout,
} from '../model/actions/checkout.action';
import { createReducer, on } from '@ngrx/store';
import { Action } from 'rxjs/internal/scheduler/Action';

const initialState: Checkout = {
  products: {
    items: [],
  },
  totalCount: 0,
  totalPrice: 0,
  isDiscountApplied: false,
  afterDiscountTotal: 0,
  isDeliveryFee: false,
  totaPriceAfterDeliveryFee: 0,
};

export const checkoutReducer = createReducer(
  initialState,
  on(addItemToCheckout, (state) => {
    console.log(state);
    return state;
  }),
  on(removeItemToCheckout, (state) => {
    console.log(state);
    return state;
  })
);
