import { Checkout } from "./checkout"

 interface orderDetailsObj  {
    address:{},
    order:{},
    checkout:{}
 }

export interface OrderHistory {
    order: orderDetailsObj []
  }
  