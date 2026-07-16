import { Filme } from '@/src/types/types';
import styles from './Card.module.css';
import Link from 'next/link';
import Image from 'next/image';
import { useResumoFilme } from '../../hooks/useResumoFilme';

type Props = {
  filme: Filme;
  priority?: boolean;
};

const IMG_BASE = process.env.NEXT_PUBLIC_TMDB_API_IMG_URL?.replace(/\/$/, "");

const Card = ({ filme , priority = false}: Props) => {
  const { id, title, poster_path, overview, vote_average } = filme;
  const resume = useResumoFilme(overview, 256)
    

  return (
    <div className={styles.card} key={id}>
      <Link href={`/filmes/${id}`}>
        <Image
          className={styles.card_poster}
          src={`${IMG_BASE}${poster_path}`}
          alt={`Poster do Filme ${title}`}
          width={300}
          height={450}
          priority={priority}
        />

        <div className={styles.card_info}>
          <h3 className={styles.card_title}>{title}</h3>
          <p className={styles.card_description}>{resume}</p>
          <p className={styles.card_description}>Nota: {vote_average}</p>
        </div>
      </Link>
    </div>
  );
};

export default Card;