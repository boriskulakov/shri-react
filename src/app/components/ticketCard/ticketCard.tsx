'use client'

import classNames from 'classnames'
import styles from './ticketCard.module.css'
import Image, { StaticImageData } from 'next/image'
import Counter from '../counter/counter'

function TicketCard({
  title,
  genre,
  poster,
}: {
  title: string
  genre: string
  poster: StaticImageData
}) {
  return (
    <div className={classNames(styles.container)}>
      <div className={classNames(styles.poster)}>
        <Image src={poster} alt="Постер фильма" />
      </div>
      <div className={classNames(styles.film)}>
        <div className={classNames(styles.info)}>
          <p className={classNames(styles.title)}>{title}</p>
          <p className={classNames(styles.genre)}>{genre}</p>
        </div>
        <div className={classNames(styles.tickets)}>
          <Counter max={30} />
        </div>
      </div>
    </div>
  )
}

export default TicketCard
