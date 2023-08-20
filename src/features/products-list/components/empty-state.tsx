import { FiAlertCircle } from 'react-icons/fi';

type Props = {
  search: string;
};

export const EmptyState = ({ search }: Props): JSX.Element => {
  return (
    <section
      className="flex h-full flex-1 flex-col items-center justify-center"
      data-testid="empty-state"
    >
      <FiAlertCircle className="fill-primary-500 mb-6 h-[76px] w-[76px] stroke-white" />

      <h2 className="text-primary-500 mb-2 text-center text-2xl font-bold">
        Nenhum produto encontrado
      </h2>
      <p className="text-center">
        Não encontramos nenhum produto com o termo{' '}
        <q>
          <strong>{search}</strong>
        </q>
      </p>
    </section>
  );
};
