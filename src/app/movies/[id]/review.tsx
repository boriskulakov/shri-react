import classNames from 'classnames'
import styles from './css/review.module.css'
import Image from 'next/image'

interface review {
  id: string
  name: string
  text: string
  rating: number
  avatar?: string
}

const staticReviews: review[] = [
  {
    id: 'M0bg9QY5gVtupNaglrmua',
    name: 'Роман',
    text: 'Сюжет интересен, но финал мог быть более неожиданным',
    rating: 6,
  },
  {
    id: 'w32kK5oV6UIr1ZHdkkMAn',
    name: 'Смешинка',
    text: 'НПо счастью мне довелось посмотреть фильм раньше, чем прочесть книгу. Это было около четырех лет назад, но тот момент я вспоминаю и по сей день. До него я не был фанатом Джона Толкина, как впрочем, и всего фентези в целом, однако стоило мне посмотреть первые десять минут фильма и оставшиеся пролетели на одном дыхании. Я словно погрузился в необычайный мир, где добро борется со злом, где зеленые рощи перемежаются с поросшими мхом статуями и древними развалинами, в мир, где пробираясь лесною тропой можно встретить остроухих неувядающих эльфов или мерзких орков – кому как повезет...',
    rating: 4,
  },
]

function Review({ id }: { id: string }) {
  const info = staticReviews.find((el) => el.id === id)
  return (
    <div className={classNames(styles.container)}>
      <div className={classNames(styles.avatar)}>
        {info?.avatar && <Image src={info.avatar} alt="Аватарĸа автора" />}
      </div>
      <div className={classNames(styles.review)}>
        <div className={classNames(styles.header)}>
          <div className={classNames(styles.name)}>{info?.name}</div>
          <div className={classNames(styles.rating)}>
            Оценка: <strong>{info?.rating}</strong>
          </div>
        </div>
        <p className={classNames(styles.text)}>{info?.text}</p>
      </div>
    </div>
  )
}

export default Review
