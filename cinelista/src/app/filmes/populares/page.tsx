import Title from '@/src/app/components/Title';
import { getPopularMovies } from '@/src/lib/api/tmdb';
import Grid from '../../components/Grid';

export const revalidate = 60; //atualizado a cada  60 secundos

const FilmesPopulares = async () => {
  const filmes = await getPopularMovies();
  return (
    <>
      <Title title="Filmes Populares" />
      <Grid filmes={filmes} />
    </>
  );
};

export default FilmesPopulares;
