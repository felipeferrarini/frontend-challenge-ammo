import { useSearchProducts as useSearchProductsBase } from '../use-search-products';
import { productsFactory } from './factories/products-factory';

type HookKeys = keyof ReturnType<typeof useSearchProductsBase>;

const mockedHook: Record<HookKeys, jest.Mock> = {
  products: jest.fn().mockReturnValue(productsFactory()),
  isLoading: jest.fn().mockReturnValue(false),
  itemsPerPage: jest.fn().mockReturnValue(10),
  page: jest.fn().mockReturnValue(1),
  onClear: jest.fn(),
  onSearch: jest.fn(),
  search: jest.fn().mockReturnValue('')
};

export const useSearchProducts = jest.fn().mockReturnValue(mockedHook);
