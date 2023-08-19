'use client';

import {
  Button,
  ButtonGroup,
  Input,
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem
} from '@nextui-org/react';
import Image from 'next/image';
import { useForm } from 'react-hook-form';
import { FaSearch } from 'react-icons/fa';
import { useSearchProducts } from '../../hooks/use-search-products';

export const Header = (): JSX.Element => {
  const { onClear, onSearch, search } = useSearchProducts();

  const { handleSubmit, register } = useForm({
    defaultValues: { search }
  });

  return (
    <Navbar position="static" className="bg-default-300 py-3">
      <NavbarBrand className="w-max flex-grow">
        <Image
          width={170}
          height={67}
          src="/ammo-logo.png"
          alt="Ammo Varejo Logo"
          data-testid="logo"
        />
      </NavbarBrand>
      <NavbarContent className="flex-1 flex-grow">
        <NavbarItem className="w-full">
          <ButtonGroup
            as="form"
            className="w-full"
            onSubmit={handleSubmit(({ search }) => onSearch(search))}
          >
            <Input
              {...register('search')}
              isClearable
              classNames={{
                inputWrapper: 'text-gray-500 rounded-l-full rounded-r-none'
              }}
              startContent={<FaSearch />}
              placeholder="Pesquise pelo nome do produto"
              size="lg"
              type="search"
              onClear={onClear}
            />
            <Button color="primary" size="lg">
              Buscar
            </Button>
          </ButtonGroup>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
};
