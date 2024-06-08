export default interface Product {
  id: number;
  name: string;
  type: string;
  description: string;
  price: number;
  discountPrice?: number;
  image: string;
  category: string;
  quantityInCart: number;
}
