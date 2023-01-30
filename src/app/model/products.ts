export interface Products {
  limit: Number;
  products: Array<{
    title: string;
    id: Number;
    description: String;
    images: Array<String>;
  }>;
  skip: Number;
  total: Number;
}
