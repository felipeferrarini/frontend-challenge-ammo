import '@/test/mock-next-image';

import { IProduct } from '@/models/product';
import { render, screen } from '@testing-library/react';
import { ListItem } from './list-item';

const mockProduct: IProduct = {
  id: 'id-1',
  name: 'Sample Product',
  description: 'Sample Description',
  category: 'Sample Category',
  price: 100,
  promotionalPrice: 80,
  images: [
    { id: 'id-1', alt: 'Image 1', url: '/image1.jpg' },
    { id: 'id-2', alt: 'Image 2', url: '/image2.jpg' }
  ]
};

describe('ProductListItem', () => {
  it('should render the product details correctly', () => {
    render(<ListItem product={mockProduct} />);

    expect(screen.getByText('Sample Product')).toBeInTheDocument();
    expect(screen.getByText('Sample Category')).toBeInTheDocument();
    expect(screen.getByText('R$ 100,00')).toBeInTheDocument();
    expect(screen.getByText('por R$ 80,00')).toBeInTheDocument();

    // Ensure the correct number of images are rendered
    const images = screen.getAllByRole('img');
    expect(images).toHaveLength(2);
  });

  it('should render images with correct src and alt attributes', () => {
    render(<ListItem product={mockProduct} />);

    const images = screen.getAllByRole('img');
    expect(images[0]).toHaveAttribute('src', '/image1.jpg');
    expect(images[0]).toHaveAttribute('alt', 'Image 1');
    expect(images[1]).toHaveAttribute('src', '/image2.jpg');
    expect(images[1]).toHaveAttribute('alt', 'Image 2');
  });
});
