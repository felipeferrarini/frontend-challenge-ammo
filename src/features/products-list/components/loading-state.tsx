import { Spinner } from '@nextui-org/react';
import { PropsWithChildren } from 'react';

type Props = PropsWithChildren<{
  isLoading?: boolean;
}>;

export const LoadingState = ({
  isLoading = true,
  children
}: Props): JSX.Element => {
  return (
    <div className="relative h-full flex-1">
      {children}

      {isLoading && (
        <div className="absolute inset-0 z-10 bg-white bg-opacity-50" />
      )}

      {isLoading && (
        <Spinner
          size="lg"
          className="absolute left-1/2 top-1/2 z-20 translate-x-1/2 translate-y-1/2"
          data-testid="loading-state"
        />
      )}
    </div>
  );
};
