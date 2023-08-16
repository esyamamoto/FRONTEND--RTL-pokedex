import { screen } from '@testing-library/react';
import App from '../App';
import renderWithRouter from '../renderWithRouter';

test('', () => {});
describe('Teste o componente <Pokemon.tsx />', () => {
  it('Teste se é renderizado um card com as informações de determinado Pokémon.', () => {
    renderWithRouter(<App />);

    const namePokemon = screen.getByText(/pikachu/i);
    expect(namePokemon).toBeInTheDocument();

    const typePokemon = screen.getByTestId('pokemon-type');
    expect(typePokemon.textContent).toBe('Electric');

    const averageWeightPokemon = screen.getByTestId('pokemon-weight');
    expect(averageWeightPokemon.textContent).toBe('Average weight: 6.0 kg');

    const imagePokemon = screen.getByRole('img', { name: /pikachu sprite/i });
    expect(imagePokemon).toHaveAttribute('src', 'https://archives.bulbagarden.net/media/upload/b/b2/Spr_5b_025_m.png');
    expect(imagePokemon).toHaveAttribute('alt', 'Pikachu sprite'); // A imagem do Pokémon tem o alt <name> sprite
  });
  // ----------------------------------------------------------------------------------------------------------------------------
  it('Teste se o card do Pokémon indicado na Pokédex contém um link de navegação para exibir detalhes desse Pokémon. O link deve ter a URL /pokemon/<id>, em que <id> é o id do Pokémon exibido.', async () => {
    const { user } = renderWithRouter(<App />);

    const moreInfoPokemon = screen.getByRole('link', { name: /more details/i });
    await user.click(moreInfoPokemon);
    expect(window.location.pathname).toBe('/pokemon/25');
  });
  // ----------------------------------------------------------------------------------------------------------------------------
  it('Teste se existe um ícone de estrela nos Pokémon favoritados', async () => {
    const { user } = renderWithRouter(<App />);
    const details = screen.getByRole('link', { name: /more details/i });
    await user.click(details);

    const checlboxFavorite = screen.getByRole('checkbox');
    await user.click(checlboxFavorite);

    const icone = screen.getByRole('img', { name: /Pikachu is marked as favorite/i });
    expect(icone).toBeInTheDocument();
    expect(icone).toHaveAttribute('src', '/star-icon.png');
    expect(icone).toHaveAttribute('alt', 'Pikachu is marked as favorite');
  });
});
