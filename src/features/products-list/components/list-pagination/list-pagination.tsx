import {
  Button,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
  Pagination
} from '@nextui-org/react';
import { useSearchProducts } from '../../hooks/use-search-products';

const options = ['10', '25', '50'];

export const ListPagination = (): JSX.Element => {
  const { totalPages, page, itemsPerPage, onPageChange, onItemsPerPageChange } =
    useSearchProducts();

  return (
    <div className="flex w-full flex-col justify-between gap-4 md:flex-row">
      <Dropdown>
        <DropdownTrigger>
          <Button
            data-testid="per-page-button"
            variant="bordered"
          >{`${itemsPerPage} Produtos por página`}</Button>
        </DropdownTrigger>
        <DropdownMenu
          aria-label="Selecione a quantidade de produtos por página"
          variant="bordered"
          selectionMode="single"
          selectedKeys={[itemsPerPage.toString()]}
        >
          {options.map(option => (
            <DropdownItem
              key={option}
              textValue={option}
              onClick={() => onItemsPerPageChange(Number(option))}
            >
              {`${option} Produtos por página`}
            </DropdownItem>
          ))}
        </DropdownMenu>
      </Dropdown>

      <Pagination
        total={totalPages}
        onChange={onPageChange}
        page={page}
        showControls
        size="lg"
        variant="bordered"
      />
    </div>
  );
};
