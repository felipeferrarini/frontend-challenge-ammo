import { fireEvent, render, screen } from '@testing-library/react';

import { useSearchProducts } from '../../hooks/use-search-products';
import { ListPagination } from './list-pagination';

jest.mock('../../hooks/use-search-products');

type HookType = typeof useSearchProducts;

const mockUseSearchProducts =
  useSearchProducts as jest.MockedFunction<HookType>;

const renderPagination = () => {
  const onPageChangeMock = jest.fn();
  const onItemsPerPageChangeMock = jest.fn();

  mockUseSearchProducts.mockReturnValue({
    totalPages: 10,
    page: 1,
    itemsPerPage: 25,
    onPageChange: onPageChangeMock,
    onItemsPerPageChange: onItemsPerPageChangeMock
  } as unknown as ReturnType<HookType>);

  render(<ListPagination />);

  return {
    onPageChangeMock,
    onItemsPerPageChangeMock
  };
};

describe('ListPagination', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should render the component correctly', () => {
    renderPagination();

    const dropdownButton = screen.getByTestId('per-page-button');
    expect(dropdownButton).toBeInTheDocument();

    const page1Button = screen.getByRole('button', {
      name: 'pagination item 1 active'
    });
    expect(page1Button).toBeInTheDocument();
  });

  it('should call onItemsPerPageChange when an option is selected in the dropdown', async () => {
    const { onItemsPerPageChangeMock } = renderPagination();

    const dropdownButton = screen.getByTestId('per-page-button');
    fireEvent.click(dropdownButton);

    const modal = screen.getByLabelText(
      'Selecione a quantidade de produtos por página'
    );
    expect(modal).toBeInTheDocument();

    const option = screen.getByText('10 Produtos por página');
    fireEvent.click(option);

    expect(onItemsPerPageChangeMock).toHaveBeenCalledWith(10);
  });

  it('should call onPageChange when a pagination page is clicked', () => {
    const { onPageChangeMock } = renderPagination();

    const page2Button = screen.getByRole('button', {
      name: 'pagination item 2'
    });
    fireEvent.click(page2Button);

    expect(onPageChangeMock).toHaveBeenCalledWith(2);
  });
});
