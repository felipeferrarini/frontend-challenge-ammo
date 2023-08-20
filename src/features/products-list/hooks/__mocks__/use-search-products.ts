import { useSearchProducts as useSearchProductsBase } from '../use-search-products';
import { productsFactory } from './factories/products-factory';

type HookKeys = keyof ReturnType<typeof useSearchProductsBase>;

const mockedHook: Record<HookKeys, jest.Mock> = {
  products: jest.fn().mockReturnValue(productsFactory()),
  isLoading: jest.fn().mockReturnValue(false),
  isError: jest.fn().mockReturnValue(false),
  isFetching: jest.fn().mockReturnValue(false),
  onClear: jest.fn(),
  onSearch: jest.fn(),
  onItemsPerPageChange: jest.fn(),
  onPageChange: jest.fn(),
  search: jest.fn().mockReturnValue(''),
  itemsPerPage: jest.fn().mockReturnValue(25),
  page: jest.fn().mockReturnValue(1),
  totalPages: jest.fn().mockReturnValue(10),
  totalItems: jest.fn().mockReturnValue(100)
};

export const useSearchProducts = jest.fn().mockReturnValue(mockedHook);
