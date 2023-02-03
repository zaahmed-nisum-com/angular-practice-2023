import { Checkout } from '../model/checkout';
import {
  addItemToCheckout,
  removeItemToCheckout,
} from '../model/actions/checkout.action';
import { createReducer, on } from '@ngrx/store';
import { Action } from 'rxjs/internal/scheduler/Action';

const initialState: Checkout = {
  products: {},
  totalCount: 0,
  totalPrice: 0,
  isDiscountApplied: false,
  afterDiscountTotal: 0,
  isDeliveryFee: false,
  deliveryFee: 0,
  totaPriceAfterDeliveryFee: 0,
};

export const _checkoutReducer = createReducer(
  initialState,
  on(addItemToCheckout, (state: any, payload: any) => {
    try {
      let checkout = { ...state };
      const id = payload.id.toString();
      if (checkout.products.hasOwnProperty(payload.id)) {
        let product = { ...checkout.products[payload.id] };
        product.count = product.count + 1;
        product.totalPrice = product.price * product.count;
        checkout = {
          ...checkout,
          products: {
            ...checkout.products,
            [`${id}`]: { ...product },
          },
        };
      } else {
        checkout = {
          ...checkout,
          products: {
            ...checkout.products,
            [`${id}`]: {
              ...payload,
              count: 1,
              totalPrice: payload.price,
            },
          },
        };
      }
      let total = 0;
      Object.values(checkout.products).map((item: any) => {
        total = total + item.totalPrice;
      });
      checkout.totalPrice = total;
      return { ...state, ...checkout };
    } catch (error) {
      console.log(error);
    }
  }),
  on(removeItemToCheckout, (state: any, payload: any) => {
    try {
      let checkout = { ...state };
      const id = payload.id.toString();
      if (checkout.products.hasOwnProperty(payload.id)) {
        if (checkout.products[payload.id].count == 1) {
          checkout = {
            ...checkout,
            products: {
              ...checkout.products,
              [`${id}`]: {},
            },
          };
          delete checkout.products[`${id}`];
        } else {
          let product = { ...checkout.products[payload.id] };
          product.count = product.count - 1;
          checkout = {
            ...checkout,
            products: {
              ...checkout.products,
              [payload.id]: { ...product },
            },
          };
        }
      }
      return { ...state, ...checkout };
    } catch (error) {
      console.log(error);
    }
    return state;
  })
);

export function checkoutReducer(state: any, action: any) {
  return _checkoutReducer(state, action);
}
