import { screen } from '@testing-library/react';
import App from '../App';
import renderWithRouter from '../renderWithRouter';

describe(' Teste o componente <FavoritePokemon.tsx />', () => {
  it('É exibido na tela a mensagem No favorite pokemon found', async () => {
    renderWithRouter(<App />);
    const notFound = screen.getByText('No favorite pokemon found');
    expect(notFound).toBeInTheDocument();
  });

  // ----------------------------------------------------------------------------------------------------------------------------

  it('São exibidos na tela apenas os Pokémon favoritados', async () => {
    const { user } = renderWithRouter(<App />);

    const favoritePokemonList = screen.getByRole('link', { name: 'More Details/i' });
    await user.click(favoritePokemonList);

    const favorite = screen.getByText(/Pokémons favoritados?/i);
    await user.click(favorite);

    const linkFavorite = screen.getByRole('link', { name: /favorite pokemon/i });
    await user.click(linkFavorite);

    const favoriteList = await screen.findByRole('link', { name: 'More Details' });
    expect(favoriteList).toBeInTheDocument();
  });
});
