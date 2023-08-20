import { FiXCircle } from 'react-icons/fi';

export const ErrorState = (): JSX.Element => {
  return (
    <section
      className="flex h-full flex-1 flex-col items-center justify-center"
      data-testid="error-state"
    >
      <FiXCircle className="mb-6 h-[76px] w-[76px] fill-red-500 stroke-white" />

      <h2 className="mb-2 text-center text-2xl font-bold text-red-500">
        Ops, algo deu errado!
      </h2>
      <p className="text-center">
        Não foi possível carregar os produtos, tente novamente mais tarde.
      </p>
    </section>
  );
};
