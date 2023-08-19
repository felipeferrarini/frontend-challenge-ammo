export interface IProduct {
  id: string;
  name: string;
  description: string;
  price: number;
  promotionalPrice: number;
  category: string;
  images: IProductImage[];
}

export interface IProductImage {
  id: string;
  url: string;
  alt: string;
}
