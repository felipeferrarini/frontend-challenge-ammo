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

  const { data, isLoading, isFetching, isError } = useQuery({
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
      setParam('page', '1');
    },
    [setParam]
  );

  const onPageChange = useCallback(
    (page: number) => setParam('page', `${page}`),
    [setParam]
  );

  const onItemsPerPageChange = useCallback(
    (itemsPerPage: number) => setParam('itemsPerPage', `${itemsPerPage}`),
    [setParam]
  );

  return {
    isLoading,
    isFetching,
    isError,
    products: data?.items || [],
    totalPages: data?.meta?.totalPages || 0,
    totalItems: data?.meta?.totalItems || 0,
    search,
    page,
    itemsPerPage,
    onClear,
    onSearch,
    onPageChange,
    onItemsPerPageChange
  };
};
