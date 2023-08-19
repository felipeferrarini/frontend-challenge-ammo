import { IProduct, IProductImage } from '@/models/product';
import { faker } from '@faker-js/faker';

export const productsFactory = (length = 10): IProduct[] => {
  const products = Array.from({ length }).map<IProduct>(() => {
    const category = faker.commerce.department();

    return {
      id: faker.string.uuid(),
      category,
      description: faker.commerce.productDescription(),
      name: faker.commerce.productName(),
      price: Number(faker.commerce.price()),
      promotionalPrice: Number(faker.commerce.price()),
      images: Array.from({ length: 3 }).map<IProductImage>(() => ({
        alt: faker.commerce.productName(),
        id: faker.string.uuid(),
        url: faker.image.urlLoremFlickr({ category })
      }))
    };
  });

  return products;
};
