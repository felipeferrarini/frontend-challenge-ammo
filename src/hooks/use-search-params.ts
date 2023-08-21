'use client';

import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { useCallback } from 'react';

export const useRouteParams = () => {
  const router = useRouter();
  const params = useSearchParams();
  const pathname = usePathname();

  const setParam = useCallback(
    (key: string, value: string) => {
      const newParams = new URLSearchParams(params);
      newParams.set(key, value);

      router.push(`${pathname}?${newParams}`);
    },
    [params, pathname, router]
  );

  const deleteParam = useCallback(
    (key: string) => {
      const newParams = new URLSearchParams(params);
      newParams.delete(key);

      router.push(`${pathname}?${newParams}`);
    },
    [params, pathname, router]
  );

  const setParams = useCallback(
    (params: Record<string, string>) => {
      const newParams = new URLSearchParams();
      Object.entries(params).forEach(([key, value]) =>
        newParams.set(key, value)
      );

      router.push(`${pathname}?${newParams}`);
    },
    [pathname, router]
  );

  return {
    getParam: params.get.bind(params),
    setParam,
    deleteParam,
    setParams
  };
};
