import { OrderHistory } from '../model/orderHistory';
import {
  addItemToOrderHistory,
} from '../model/actions/orderHistory.action';
import { createReducer, on } from '@ngrx/store';
import { Action } from 'rxjs/internal/scheduler/Action';


const initialState: OrderHistory = {
    order:[]
};

export const _orderHistoryReducer = createReducer(
    initialState,
    on(addItemToOrderHistory, (state: any, payload: any) => {
      try {
        // let orderHistory = { ...state };
        // orderHistory.push(payload)
        console.log("payload",payload)
        return { ...state, ...payload };
      } catch (error) {
        console.log(error);
      }
    }),
   
  );
  
  export function orderHistoryReducer(state: any, action: any) {
    return _orderHistoryReducer(state, action);
  }
  