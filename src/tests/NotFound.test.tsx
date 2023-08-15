import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { NotFound } from '../pages';

describe('Teste o componente <NotFound.tsx />', () => {
  it('É exibido na tela um h2 com o texto Page requested not found', () => {
    render(<NotFound />, { wrapper: BrowserRouter });
    const notFound = /Page requested not found/i;
    expect(screen.getByRole('heading', { name: notFound })).toBeInTheDocument();
  });
  // ----------------------------------------------------------------------------------------------------------------------------
  it('Existe uma imagem com o src:', () => {
    render(<NotFound />, { wrapper: BrowserRouter });
    const img = screen.getByRole('img');
    const altImg = 'Clefairy pushing buttons randomly with text I have no idea what i\'m doing';
    expect(img).toHaveAttribute('alt', altImg);
  });
});
