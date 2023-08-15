import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import App from '../App';

describe('Teste o componente <App.tsx />', () => {
  it('É exibido na tela um link com o texto Home', () => {
    render(<App />, { wrapper: BrowserRouter });
    const home = /home/i;
    expect(screen.getByRole('link', { name: home })).toBeInTheDocument();
  });
  // ----------------------------------------------------------------------------------------------------------------------------
  it('É exibido na tela um link com o texto About', () => {
    render(<App />, { wrapper: BrowserRouter });
    const about = /about/i;
    expect(screen.getByRole('link', { name: about })).toBeInTheDocument();
  });
  // ----------------------------------------------------------------------------------------------------------------------------
  it('É exibido na tela um link com o texto Favorite Pokémon', () => {
    render(<App />, { wrapper: BrowserRouter });
    const favorite = /Favorite Pokémon/i;
    expect(screen.getByRole('link', { name: favorite })).toBeInTheDocument();
  });
});
