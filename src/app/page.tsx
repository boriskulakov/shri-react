import classNames from 'classnames'
import styles from './css/page.module.css'
import Filters from './components/filter/filters'
import TicketCard from './components/ticketCard/ticketCard'
import lotr from '@/images/poster_lotr.png'

export default function Home() {
  return (
    <div className={classNames(styles.container, 'page_container')}>
      <div className={classNames(styles.filters)}>
        <div className={classNames(styles.search)}>
          <p className={classNames(styles.title)}>Фильтр поиска</p>
          <Filters />
        </div>
      </div>
      <div className={classNames(styles.films)}>
        <TicketCard
          title="Властелин колец: Братство кольца"
          genre="Фэнтези"
          poster={lotr}
        />
        <TicketCard
          title="Властелин колец: Две крепости"
          genre="Фэнтези"
          poster={lotr}
        />
        <TicketCard
          title="Властелин колец: Возвращение короля"
          genre="Фэнтези"
          poster={lotr}
        />
        <TicketCard title="Оно" genre="Ужасы" poster={lotr} />
      </div>
    </div>
  )
}
