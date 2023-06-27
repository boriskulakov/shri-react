'use client'

import classNames from 'classnames'
import styles from './ticketCard.module.css'
import Image from 'next/image'
import Link from 'next/link'
import Counter from '../counter/counter'
import { movie, defaultMovie, translateGenre } from '@/app/utils/movie'
import { useGetMovieQuery } from '@/redux/services/movieApi'

function TicketCard({ id }: { id: string }) {
  const { data, isLoading, error } = useGetMovieQuery(id)
  const { posterUrl, title, genre, rating }: movie = data || defaultMovie
  const cinema = '4 с половиной звезды'

  return (
    <div className={classNames(styles.container)}>
      <div className={classNames(styles.poster)}>
        <Image
          src={posterUrl}
          alt="Постер фильма"
          className={classNames(styles.image)}
          width={100}
          height={120}
        />
      </div>
      <div className={classNames(styles.film)}>
        <div className={classNames(styles.info)}>
          <p className={classNames(styles.title)}>
            <Link href={'/movies/' + id}>{title}</Link>
            <span
              className={classNames(
                styles.rating,
                styles[rating > 7 ? 'top' : rating > 4 ? 'average' : '']
              )}
            >
              {rating}
            </span>
          </p>
          <p className={classNames(styles.genre)}>{translateGenre(genre)}</p>
          <div className={classNames(styles.cinema)}>
            <p className={classNames(styles.cinema_title)}>{cinema}</p>
          </div>
        </div>
        <div className={classNames(styles.tickets)}>
          <Counter movieId={id} max={30} />
        </div>
      </div>
    </div>
  )
}

export default TicketCard
