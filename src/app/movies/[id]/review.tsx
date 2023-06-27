'use client'

import classNames from 'classnames'
import styles from './css/review.module.css'
import Image from 'next/image'
import { useGetReviewsQuery } from '@/redux/services/movieApi'

interface review {
  id: string
  name: string
  text: string
  rating: number
  avatar?: string
}

function Review({ reviewId }: { reviewId: string }) {
  const { data } = useGetReviewsQuery(null)
  if (!data) return

  const { name, text, rating, avatar }: review = data.filter(
    (el: review) => el.id === reviewId
  )[0]
  
  return (
    <div className={classNames(styles.container)}>
      <div className={classNames(styles.avatar)}>
        {avatar && <Image src={avatar} alt="Аватарĸа автора" />}
      </div>
      <div className={classNames(styles.review)}>
        <div className={classNames(styles.header)}>
          <div className={classNames(styles.name)}>{name}</div>
          <div className={classNames(styles.rating)}>
            Оценка: <strong>{rating}</strong>
          </div>
        </div>
        <p className={classNames(styles.text)}>{text}</p>
      </div>
    </div>
  )
}

export default Review
