import { Action, createAction, props } from '@ngrx/store';
import { Checkout } from '../checkout';

// export enum CheckoutActionType {
//   ADD_ITEM = '[ARTICLE] Add ARTICLE',
// }

// export const AddCheckoutAction = createAction(
//   CheckoutActionType.ADD_ITEM,
//   props<{ payload: any }>()
// );

export const addItemToCheckout = createAction('[Checkout Component] Add Item');
export const removeItemToCheckout = createAction(
  '[Checkout Component] Remove Item'
);

// implements Action {
//   readonly type = CheckoutActionType.ADD_ITEM;
//   constructor(public payload: Checkout) {}
// }

// export type CheckoutAction = AddCheckoutAction;
