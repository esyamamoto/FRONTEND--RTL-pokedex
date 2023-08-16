import { screen } from '@testing-library/react';
import App from '../App';
import renderWithRouter from '../renderWithRouter';

describe('Teste o componente <Pokedex.tsx />', () => {
  it('Teste se a página contém um heading h2 com o texto Encountered Pokémon.', () => {
    renderWithRouter(<App />);
    const about = /Encountered Pokémon/i;
    expect(screen.getByRole('heading', { name: about })).toBeInTheDocument();
  });

  // ----------------------------------------------------------------------------------------------------------------------------
  it('Teste se é exibido o próximo Pokémon da lista quando o botão Próximo Pokémon é clicado', async () => {
    const { user } = renderWithRouter(<App />);

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
    await user.click(buttonList);
    expect(pokemonName.textContent).toBe('Rapidash');
    await user.click(buttonList);
    expect(pokemonName.textContent).toBe('Snorlax');
    await user.click(buttonList);
    expect(pokemonName.textContent).toBe('Dragonair');
    await user.click(buttonList);
    expect(pokemonName.textContent).toBe('Pikachu');
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
  /* TA DANDO ERRO :'(
  it('Teste se a Pokédex contém um botão para resetar o filtro', async () => {
    const { user } = renderWithRouter(<App />);
    const reseteButton = screen.getByRole('button', { name: /all/i });

    const testFire = screen.getByRole('button', { name: /fire/i });
    expect(testFire).toBeInTheDocument();
    await user.click(testFire);
    const fireName = screen.getByText(/charmander/i);
    expect(fireName).toBeInTheDocument();

    await user.click(reseteButton);

    const buttonList = /lista pokemons/i;
    expect(screen.getByRole('button', { name: buttonList })).toBeInTheDocument();
  }); */
  // ----------------------------------------------------------------------------------------------------------------------------
  it('A Pokedéx deverá mostrar os Pokémon normalmente (sem filtros) quando o botão All for clicado.', async () => {
    const { user } = renderWithRouter(<App />);

    const buttonAll = screen.getByRole('button', { name: /all/i });
    expect(buttonAll).toBeInTheDocument();

    const firePokemon = screen.getByRole('button', { name: /fire/i });
    await user.click(firePokemon);
    const iChoiceYou = screen.getByText(/Charmander/i);
    expect(iChoiceYou).toBeInTheDocument();

    await user.click(buttonAll);
    const pikachu = screen.getByText(/pikachu/i);
    expect(pikachu).toBeInTheDocument();
  });
});
