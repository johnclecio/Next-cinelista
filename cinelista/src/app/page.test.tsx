import '@testing-library/jest-dom';

import { getTrendindMovies } from '../lib/api/tmdb';

import { render, screen } from '@testing-library/react';
import Home from './page';

jest.mock('../lib/api/tmdb', () => ({
  getTrendindMovies: jest.fn(),
}));

test("Exibe o título 'Filmes em destaque' na página inicial corretamente", async () => {
  (getTrendindMovies as jest.Mock).mockResolvedValue([]);

  const titulo = 'Filmes em destaque';

  render(await Home());
  // Verificar se o titulo da seção aparece corretamente
  expect(screen.getByText(titulo)).toBeInTheDocument();
});

test('Renderiza os filmes em destaque corretamente', async () => {
  (getTrendindMovies as jest.Mock).mockResolvedValue([
    {
      id: 1,
      title: 'Filme teste',
      overview: 'Resumo teste',
      poster_page: 'public/next.svg',
      vote_average: 9.0,
    },
  ]);

  render(await Home());

  expect(await screen.findByText('Filme teste')).toBeInTheDocument();
});

test('Exibir uma mensagem quando não houver filmes disponíveis', async () => {
  (getTrendindMovies as jest.Mock).mockResolvedValue([]);

  render(await Home());

  expect(
    await screen.findByText('Nenhum filme foi encontrado'),
  ).toBeInTheDocument();
});
