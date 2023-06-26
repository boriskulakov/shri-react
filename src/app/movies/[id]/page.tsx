import classNames from 'classnames'
import styles from './css/page.module.css'
import Image from 'next/image'
import { movie, defaultMovie, translateGenre } from '@/app/utils/movie'
import Counter from '@/app/components/counter/counter'
import Review from './review'

export const staticMovies: movie[] = [
  {
    title: 'Властелин колец: Братство Кольца',
    posterUrl: 'https://i.postimg.cc/pdCLNMqX/1.webp',
    releaseYear: 2001,
    description:
      'Сказания о Средиземье — это хроника Великой войны за Кольцо, длившейся не одну тысячу лет. Тот, кто владел Кольцом, получал неограниченную власть, но был обязан служить злу.Тихая деревня, где живут хоббиты. Придя на 111-й день рождения к своему старому другу Бильбо Бэггинсу, волшебник Гэндальф начинает вести разговор о кольце, которое Бильбо нашел много лет назад. Это кольцо принадлежало когда-то темному властителю Средиземья Саурону, и оно дает большую власть своему обладателю. Теперь Саурон хочет вернуть себе власть над Средиземьем. Бильбо отдает Кольцо племяннику Фродо, чтобы тот отнёс его к Роковой Горе и уничтожил.',
    genre: 'fantasy',
    id: '2aT976Fs_Bek0e2ZR_05V',
    rating: 8,
    director: 'Питер Джексон',
    reviewIds: ['M0bg9QY5gVtupNaglrmua', 'w32kK5oV6UIr1ZHdkkMAn'],
  },
  {
    title: 'Властелин колец: Две крепости',
    posterUrl: 'https://i.postimg.cc/9MfFCgnP/2.webp',
    releaseYear: 2002,
    description:
      'Братство распалось, но Кольцо Всевластья должно быть уничтожено. Фродо и Сэм вынуждены довериться Голлуму, который взялся провести их к вратам Мордора. Громадная армия Сарумана приближается: члены братства и их союзники готовы принять бой. Битва за Средиземье продолжается.',
    genre: 'fantasy',
    id: 'CTzeB2PGEHHBwxCNlU4uo',
    rating: 8,
    director: 'Питер Джексон',
    reviewIds: ['yvLjlSo9w6T4Mp6gG22pc', 'PnxKfx6XS_RqcIxC7w4a7'],
  },
]

function Page({ params }: { params: { id: string } }) {
  const info: movie =
    staticMovies.find((el) => el.id === params.id) || defaultMovie
  return (
    <div className={classNames(styles.container, 'page_container')}>
      <div className={classNames(styles.film)}>
        <div className={classNames(styles.poster)}>
          {info.posterUrl.length > 0 && (
            <Image
              src={info.posterUrl}
              alt={'Постер фильма: ' + info.title}
              className={classNames(styles.image)}
              width={400}
              height={500}
            />
          )}
        </div>
        <div className={classNames(styles.about)}>
          <div className={classNames(styles.info_container)}>
            <div className={classNames(styles.header)}>
              <h1 className={classNames(styles.title)}>{info.title}</h1>
              {info.posterUrl.length > 0 && <Counter />}
            </div>

            <div className={classNames(styles.info)}>
              <p className={classNames(styles.info_text)}>
                <span className={classNames(styles.info_title)}>Жанр: </span>
                {translateGenre(info.genre)}
              </p>
              <p className={classNames(styles.info_text)}>
                <span className={classNames(styles.info_title)}>
                  Год выпуска:{' '}
                </span>
                {info.releaseYear}
              </p>
              <p className={classNames(styles.info_text)}>
                <span className={classNames(styles.info_title)}>Рейтинг: </span>
                {info.rating}
              </p>
              <p className={classNames(styles.info_text)}>
                <span className={classNames(styles.info_title)}>
                  Режиссер:{' '}
                </span>
                {info.director}
              </p>
            </div>
          </div>

          <div className={classNames(styles.description)}>
            <p className={classNames(styles.description_title)}>Описание</p>
            <p className={classNames(styles.description_text)}>
              {info.description}
            </p>
          </div>
        </div>
      </div>
      <div className={classNames(styles.reviews)}>
        {info.reviewIds.map((el) => (
          <Review id={el} key={el} />
        ))}
      </div>
    </div>
  )
}

export default Page
