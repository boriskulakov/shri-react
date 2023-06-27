'use client'

import classNames from 'classnames'
import styles from './ticketCard.module.css'
import Image from 'next/image'
import Link from 'next/link'
import Counter from '../counter/counter'
import { translateGenre } from '@/app/utils/movie'
import { useGetMovieQuery, useGetCinemasQuery } from '@/redux/services/movieApi'

function TicketCard({
  id,
  withoutCounter,
}: {
  id: string
  withoutCounter?: boolean
}) {
  const { data, isLoading } = useGetMovieQuery(id)
  const { data: cinemas, isLoading: cinemaLoading } = useGetCinemasQuery(null)

  let ticketCinema = ''
  if (data && cinemas) {
    ticketCinema = cinemas.find((el) => el.movieIds.includes(id)).name
  }

  return (
    <>
      {isLoading || (
        <div className={classNames(styles.container)}>
          <div className={classNames(styles.poster)}>
            <Image
              src={data.posterUrl}
              alt="Постер фильма"
              className={classNames(styles.image)}
              width={100}
              height={120}
            />
          </div>
          <div className={classNames(styles.film)}>
            <div className={classNames(styles.info)}>
              <p className={classNames(styles.title)}>
                <Link href={'/movies/' + id}>{data.title}</Link>
                <span
                  className={classNames(
                    styles.rating,
                    styles[
                      data.rating > 7 ? 'top' : data.rating > 4 ? 'average' : ''
                    ]
                  )}
                >
                  {data.rating}
                </span>
              </p>
              <p className={classNames(styles.genre)}>
                {translateGenre(data.genre)}
              </p>
              <div className={classNames(styles.cinema)}>
                <p className={classNames(styles.cinema_title)}>
                  {cinemaLoading || ticketCinema}
                </p>
              </div>
            </div>
            {withoutCounter || (
              <div className={classNames(styles.tickets)}>
                <Counter movieId={id} max={30} />
              </div>
            )}
          </div>
        </div>
      )}
    </>
  )
}

export default TicketCard
