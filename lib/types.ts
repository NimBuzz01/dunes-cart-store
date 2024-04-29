export interface ICollection {
  id: string;
  label: string;
  imageUrl: string;
}

export interface ICategory {
  id: string;
  name: string;
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
