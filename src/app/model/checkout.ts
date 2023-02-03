export interface Checkout {
  products: {
    [key: number]: {
      count: any;
    };
  };
  totalCount: Number;
  totalPrice: Number;
  isDiscountApplied: Boolean;
  afterDiscountTotal: Number;
  isDeliveryFee: Boolean;
  totaPriceAfterDeliveryFee: Number;
  deliveryFee: Number;
}
