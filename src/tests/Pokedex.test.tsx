import { BrowserRouter } from 'react-router-dom';
import { render, screen } from '@testing-library/react';
import { userEvent } from '@testing-library/user-event/dist/types/setup';
import App from '../App';
import renderWithRouter from '../renderWithRouter';

describe('Teste o componente <Pokedex.tsx />', () => {
  it('Teste se a página contém um heading h2 com o texto Encountered Pokémon.', () => {
    renderWithRouter(<App />, { route: '/' });
    const about = /Encountered Pokémon/i;
    expect(screen.getByRole('heading', { name: about })).toBeInTheDocument();
  });

  // ----------------------------------------------------------------------------------------------------------------------------
  it('Teste se é exibido o próximo Pokémon da lista quando o botão Próximo Pokémon é clicado', async () => {
    const { user } = renderWithRouter(<App />, { route: '/' });

    const pokemonName = screen.getByTestId('pokemon-name');
    expect(pokemonName).toBeInTheDocument();

    const buttonList = screen.getByRole('button', { name: 'Próximo Pokémon' });
    expect(buttonList).toBeInTheDocument();

    await user.click(buttonList);
    expect(pokemonName.textContent).toBe('Charmander');
    await user.click(buttonList);
    expect(pokemonName.textContent).toBe('Caterpie');
    await user.click(buttonList);
    expect(pokemonName.textContent).toBe('Ekans');
    await user.click(buttonList);
    expect(pokemonName.textContent).toBe('Alakazam');
    await user.click(buttonList);
    expect(pokemonName.textContent).toBe('Mew');
  });

  // ----------------------------------------------------------------------------------------------------------------------------
  it('Teste se é mostrado apenas um Pokémon por vez.', () => {
    renderWithRouter(<App />);
    const pokemon = screen.queryAllByTestId('pokemon-name');
    expect(pokemon).toHaveLength(1);
  });

  // ----------------------------------------------------------------------------------------------------------------------------
  it('Teste se a Pokédex tem os botões de filtro', () => {
    renderWithRouter(<App />);
    const buttonFilterPokemon = screen.getAllByTestId('pokemon-type-button');
    expect(buttonFilterPokemon).toHaveLength(7);
    // expect.arrayContaining(['Electric', 'Bug', 'Poison', 'Psychic', 'Fire', 'Normal', 'Dragon']));
  });

  // ----------------------------------------------------------------------------------------------------------------------------
  it('Teste se a Pokédex contém um botão para resetar o filtro', async () => {
    const { user } = renderWithRouter(<App />, { route: '/' });
    const reseteButton = screen.getByRole('button', { name: /All/i });
    expect(reseteButton).toBeInTheDocument();
    await user.click(reseteButton);
    const buttonList = /Próximo Pokémon/i;
    expect(screen.getByRole('button', { name: buttonList })).toBeInTheDocument();
  });
});
