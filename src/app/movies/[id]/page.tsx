'use client'

import classNames from 'classnames'
import styles from './css/page.module.css'
import Image from 'next/image'
import { movie, defaultMovie, translateGenre } from '@/app/utils/movie'
import Counter from '@/app/components/counter/counter'
import Review from './review'
import { useGetMovieQuery } from '@/redux/services/movieApi'

function Page({ params }: { params: { id: string } }) {
  const { data, isLoading, error } = useGetMovieQuery(params.id)
  const {
    posterUrl,
    title,
    genre,
    rating,
    releaseYear,
    director,
    description,
    reviewIds,
  }: movie = data || defaultMovie

  return (
    <div className={classNames(styles.container, 'page_container')}>
      <div className={classNames(styles.film)}>
        <div className={classNames(styles.poster)}>
          {posterUrl.length > 0 && (
            <Image
              src={posterUrl}
              alt={'Постер фильма: ' + title}
              className={classNames(styles.image)}
              width={400}
              height={500}
            />
          )}
        </div>
        <div className={classNames(styles.about)}>
          <div className={classNames(styles.info_container)}>
            <div className={classNames(styles.header)}>
              <h1 className={classNames(styles.title)}>{title}</h1>
              {posterUrl.length > 0 && <Counter movieId={params.id} />}
            </div>

            <div className={classNames(styles.info)}>
              <p className={classNames(styles.info_text)}>
                <span className={classNames(styles.info_title)}>Жанр: </span>
                {translateGenre(genre)}
              </p>
              <p className={classNames(styles.info_text)}>
                <span className={classNames(styles.info_title)}>
                  Год выпуска:{' '}
                </span>
                {releaseYear}
              </p>
              <p className={classNames(styles.info_text)}>
                <span className={classNames(styles.info_title)}>Рейтинг: </span>
                {rating}
              </p>
              <p className={classNames(styles.info_text)}>
                <span className={classNames(styles.info_title)}>
                  Режиссер:{' '}
                </span>
                {director}
              </p>
            </div>
          </div>

          <div className={classNames(styles.description)}>
            <p className={classNames(styles.description_title)}>Описание</p>
            <p className={classNames(styles.description_text)}>{description}</p>
          </div>
        </div>
      </div>
      <div className={classNames(styles.reviews)}>
        {reviewIds.map((el) => (
          <Review reviewId={el} key={el} />
        ))}
      </div>
    </div>
  )
}

export default Page
