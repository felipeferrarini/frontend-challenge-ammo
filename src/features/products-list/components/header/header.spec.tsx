import { render, screen } from '@testing-library/react';
import { Header } from './header';

jest.mock('../../hooks/use-search-products');

describe('Header', () => {
  beforeEach(() => {
    render(<Header />);
  });

  it('should display the logo', () => {
    const logo = screen.getByAltText('Ammo Varejo Logo');

    expect(logo).toBeInTheDocument();
  });

  it('should display an input to search for products', () => {
    const input = screen.getByPlaceholderText('Pesquise pelo nome do produto');

    expect(input).toBeInTheDocument();
  });

  it('should display a button to search for products', () => {
    const button = screen.getByRole('button', { name: 'Buscar' });

    expect(button).toBeInTheDocument();
  });
});
