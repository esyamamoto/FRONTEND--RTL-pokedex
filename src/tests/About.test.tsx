import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { About } from '../pages';
import App from '../App';

describe('Teste o componente <About.tsx />.', () => {
  it('É exibido na tela um h2 com texto About Pokédex', () => {
    render(<About />, { wrapper: BrowserRouter });
    const about = /About Pokédex/i;
    expect(screen.getByRole('heading', { name: about })).toBeInTheDocument();
  });
  // ----------------------------------------------------------------------------------------------------------------------------
  it('O atributo src da imagem é', () => {
    render(<About />, { wrapper: BrowserRouter });
    const img = screen.getByRole('img');
    const urlImg = 'https://cdn2.bulbagarden.net/upload/thumb/8/86/Gen_I_Pok%C3%A9dex.png/800px-Gen_I_Pok%C3%A9dex.png';
    expect(img).toHaveAttribute('src', urlImg);
  });
});
