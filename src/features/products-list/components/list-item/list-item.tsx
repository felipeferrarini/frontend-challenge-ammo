import { IProduct } from '@/models/product';
import { formatPrice } from '@/utils/number-utils';
import { Card, CardBody, Image } from '@nextui-org/react';
import NextImage from 'next/image';

type Props = {
  product: IProduct;
};

export const ListItem = ({ product }: Props): JSX.Element => {
  return (
    <Card>
      <CardBody className="flex w-full flex-col gap-4 overflow-x-hidden md:flex-row md:items-center md:overflow-x-auto">
        <div className="flex flex-row items-center gap-4 overflow-x-auto md:overflow-x-hidden">
          {product.images.map(image => (
            <Image
              key={image.id}
              as={NextImage}
              alt={image.alt}
              className="max-w-[100px] rounded object-cover"
              src={image.url}
              width={640}
              height={480}
            />
          ))}
        </div>
        <div className="flex flex-grow flex-col gap-2 md:flex-row md:justify-between">
          <div className="flex flex-col gap-2">
            <p className="text-xl font-bold">{product.name}</p>
            <p className="">{product.category}</p>
          </div>
          <div>
            <s>{formatPrice(product.price)}</s>
            <strong> por {formatPrice(product.promotionalPrice)}</strong>
          </div>
        </div>
      </CardBody>
    </Card>
  );
};
