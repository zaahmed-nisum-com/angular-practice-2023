export interface Checkout {
  products: {
    items: {};
  };
  totalCount: Number;
  totalPrice: Number;
  isDiscountApplied: Boolean;
  afterDiscountTotal: Number;
  isDeliveryFee: Boolean;
  totaPriceAfterDeliveryFee: Number;
}
