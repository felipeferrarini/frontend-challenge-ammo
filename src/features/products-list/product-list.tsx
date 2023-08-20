'use client';

import {
  EmptyState,
  ErrorState,
  Header,
  ListItem,
  ListPagination,
  LoadingState
} from './components';
import { useSearchProducts } from './hooks/use-search-products';

export const ProductList = (): JSX.Element => {
  const { products, isLoading, isError, totalItems, search, isFetching } =
    useSearchProducts();

  return (
    <main className="flex min-h-screen flex-col">
      <Header />

      {isError && <ErrorState />}

      {isLoading && <LoadingState />}

      {!isLoading && !isError && products.length === 0 && (
        <EmptyState search={search} />
      )}

      {!isLoading && products.length > 0 && (
        <section className="container mx-auto flex flex-col gap-6 px-6 py-4">
          <LoadingState isLoading={isFetching}>
            <div className="flex flex-col gap-6">
              <h5 className="border-warning-500 border-b-3 w-max text-lg">
                {totalItems} Produtos encontrados
              </h5>
              <div className="flex flex-col gap-3">
                {products.map(product => (
                  <ListItem key={product.id} product={product} />
                ))}
              </div>
            </div>
          </LoadingState>

          <ListPagination />
        </section>
      )}
    </main>
  );
};
