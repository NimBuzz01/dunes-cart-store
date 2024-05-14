export interface ICollection {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  productUrl: string;
}

export interface ICategory {
  id: string;
  name: string;
  imageUrl: string;
}

export interface IImage {
  id: string;
  url: string;
}
export interface IProduct {
  id: string;
  category: ICategory;
  name: string;
  price: string;
  isFeatured: boolean;
  description: string;
  details: string[];
  images: IImage[];
}

export interface IOrder {
  id: string;
  items: IOrderItem[];
  total: number;
}

export interface IOrderItem {
  product: IProduct;
  quantity: number;
}

export interface ContactEmailTypes {
  message: string;
  name: string;
  email: string;
  phone: string;
}
