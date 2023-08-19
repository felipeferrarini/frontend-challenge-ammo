import { getEnv } from '@/config/env';
import { createHttpClient } from '@/config/lib/http-client';
import { IProduct } from '@/models/product';
import { PaginatedRequest, PaginatedResponse } from '@/types';

const httpClient = createHttpClient(getEnv('API_URL'));

export const findAll = async ({
  itemsPerPage = 10,
  page = 1,
  search = ''
}: PaginatedRequest): Promise<PaginatedResponse<IProduct>> => {
  const params = {
    page,
    itemsPerPage,
    search
  };

  const { data } = await httpClient.get<PaginatedResponse<IProduct>>(
    '/products',
    { params }
  );

  return data;
};
