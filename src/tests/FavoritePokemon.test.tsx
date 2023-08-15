import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { FavoritePokemon } from '../pages';
import App from '../App';

describe(' Teste o componente <FavoritePokemon.tsx />', () => {
  it('É exibido na tela a mensagem No favorite pokemon found', () => {
    render(<FavoritePokemon />, { wrapper: BrowserRouter });
    const notFound = /No favorite pokemon found/i;
    expect(screen.getByText('notFound')).toBeInTheDocument();
  });
  // ----------------------------------------------------------------------------------------------------------------------------
  it('São exibidos na tela apenas os Pokémon favoritados', () => {
    render(<FavoritePokemon />, { wrapper: BrowserRouter });
  });
});
