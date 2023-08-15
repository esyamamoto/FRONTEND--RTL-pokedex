/*
import { screen } from '@testing-library/react';
import App from '../App';
import renderWithRouter from '../renderWithRouter';

describe(' Teste o componente <FavoritePokemon.tsx />', () => {
  it('É exibido na tela a mensagem No favorite pokemon found', () => {
    renderWithRouter(<App />, { route: '/favorites' });

    const notFound = screen.getByText('No favorite pokemon found');
    expect(notFound).toBeInTheDocument();
  });

  // ----------------------------------------------------------------------------------------------------------------------------

  it('São exibidos na tela apenas os Pokémon favoritados', async () => {
    const { user } = renderWithRouter(<App />, { route: '/pokemon/151' });

    const favorite = screen.getByRole('checkbox', { name: /Pokémon favoritados/i });
    await user.click(favorite);

    const linkFavorite = screen.getByRole('link', { name: /favorite pokemon/i });
    await user.click(linkFavorite);

    const favoritePokemon = screen.getByText(/Mew/i);
    expect(favoritePokemon).toBeInTheDocument();
  });
});
*/
