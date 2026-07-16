import Title from './components/Title';
import Grid from './components/Grid';
import { getTrendindMovies } from '../lib/api/tmdb';

export default async function Home() {
  const filmes = await getTrendindMovies();
  return (
    <>
      <Title title="Destaque" />

      <Grid filmes={filmes} />
    </>
  );
}
