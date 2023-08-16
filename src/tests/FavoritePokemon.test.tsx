import { screen } from '@testing-library/react';
import FavoritePokemon from '../pages/FavoritePokemon/FavoritePokemon';
import renderWithRouter from '../renderWithRouter';
import App from '../App';

describe(' Teste o componente <FavoritePokemon.tsx />', () => {
  it('É exibido na tela a mensagem No favorite pokemon found', () => {
    renderWithRouter(<FavoritePokemon />);

    const notFound = screen.getByText(/no favorite pokémon found/i);
    expect(notFound).toBeInTheDocument();
  });

  // ----------------------------------------------------------------------------------------------------------------------------
  it('São exibidos na tela apenas os Pokémon favoritados', async () => {
    const { user } = renderWithRouter(<App />);

    const favoriteList = screen.getByRole('link', { name: /more details/i });
    await user.click(favoriteList);

    const favoritePokemon = screen.getByText(/pokémon favoritado\?/i);
    await user.click(favoritePokemon);
    expect(favoritePokemon).toBeInTheDocument();

    const linkFavorite = screen.getByRole('link', { name: /favorite pokémon/i });
    await user.click(linkFavorite);
    expect(screen.getByText(/pikachu/i)).toBeInTheDocument();
  });
});
