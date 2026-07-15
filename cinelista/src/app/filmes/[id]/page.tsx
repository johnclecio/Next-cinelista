import Link from 'next/link';
import { notFound } from 'next/navigation';
import styles from './DetailsFilme.module.css';
import { getMoviesDetails } from '@/src/lib/api/tmdb';
import Image from 'next/image';

type Props = {
  params: Promise<{
    id: number;
  }>;
};

export const generateMetadata = async ({ params }: Props) => {
  const { id } = await params;

  const details = await getMoviesDetails(id);

  if (!details) return;

  return {
    title: `${details.title} | Cinelista`,
    description: details.overview,
    openGraph: {
      title: `${details.title} | Cinelista`,
      description: details.overview,
      images: [
        `${process.env.NEXT_PUBLIC_TMDB_API_IMG_URL}${details.poster_path}`,
      ],
    },
  };
};

export default async function DetalheFilme({ params }: Props) {
  const { id } = await params;

  const details = await getMoviesDetails(id);

  if (!details) return notFound();

  const { title, poster_path, overview } = details;

  return (
    <>
      <div className={styles.detalhes}>
        <div className={styles.detalhes_container}>
          <Link className={styles.detalhes_voltar} href={`/`}>
            Voltar
          </Link>
          <section>
            <figure>
              <Image
                className={styles.detalhes_imagem}
                src={`${process.env.NEXT_PUBLIC_TMDB_API_IMG_URL}${poster_path}`}
                alt={`Poster de filme: ${title}`}
              />
            </figure>
            <article className={styles.detalhes_info}>
              <h2>{title}</h2>
              <p>{overview}</p>
            </article>
          </section>
        </div>
      </div>
    </>
  );
}
