'use client';

import { useRouteParams } from '@/hooks';
import { productsService } from '@/services';
import { useQuery } from '@tanstack/react-query';
import { useCallback } from 'react';

export const useSearchProducts = () => {
  const { deleteParam, getParam, setParam } = useRouteParams();

  const search = getParam('search') || '';
  const page = Number(getParam('page') || '1');
  const itemsPerPage = Number(getParam('itemsPerPage') || '10');

  const { isLoading, data } = useQuery({
    queryKey: ['list-products', search, page, itemsPerPage],
    queryFn: () => productsService.findAll({ search, page, itemsPerPage }),
    keepPreviousData: true
  });

  const onClear = useCallback(() => {
    deleteParam('search');
  }, [deleteParam]);

  const onSearch = useCallback(
    (search: string) => {
      setParam('search', search);
    },
    [setParam]
  );

  return {
    isLoading,
    products: data?.items || [],
    search,
    page,
    itemsPerPage,
    onClear,
    onSearch
  };
};
