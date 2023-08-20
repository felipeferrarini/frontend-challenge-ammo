import { render, screen } from '@testing-library/react';
import { productsFactory } from './hooks/__mocks__/factories/products-factory';
import { useSearchProducts } from './hooks/use-search-products';
import { ProductList } from './product-list';

jest.mock('./hooks/use-search-products');

const mockedUseSearchProducts = useSearchProducts as jest.Mock;
type UseSearchProductsReturn = ReturnType<typeof useSearchProducts>;

const mockAndRender = (
  overrideReturn: Partial<UseSearchProductsReturn> = {}
) => {
  const useSearchProductsReturn: UseSearchProductsReturn = {
    isLoading: false,
    isError: false,
    products: [],
    totalItems: 0,
    search: '',
    isFetching: false,
    itemsPerPage: 10,
    ...overrideReturn
  } as unknown as UseSearchProductsReturn;

  mockedUseSearchProducts.mockReturnValue(useSearchProductsReturn);

  render(<ProductList />);

  return useSearchProductsReturn;
};

describe('ProductList component', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('renders loading state', () => {
    mockAndRender({ isLoading: true });

    expect(screen.getByTestId('loading-state')).toBeInTheDocument();
  });

  it('renders error state', () => {
    mockAndRender({ isError: true });

    expect(screen.getByTestId('error-state')).toBeInTheDocument();
  });

  it('renders empty state', () => {
    mockAndRender({ search: 'test' });

    expect(screen.getByTestId('empty-state')).toBeInTheDocument();
  });

  it('renders product list', () => {
    const { products } = mockAndRender({
      products: productsFactory(2),
      totalItems: 2
    });

    expect(screen.getByText(products[0].name)).toBeInTheDocument();
    expect(screen.getByText(products[1].name)).toBeInTheDocument();
  });
});
