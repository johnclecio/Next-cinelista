import Title from "@/src/app/components/Title";
import { getPopularMovies } from "@/src/lib/api/tmdb";
import Grid from "../../components/Grid";


export const dynamic = 'force-dynamic';

const FilmesEmAlta =  async () =>{

    const filmes = await getPopularMovies();

    return(
        <>
            <Title title="Filmes em Alta"/>
            <Grid filmes={filmes}/>
        </>

    );
}

export default FilmesEmAlta;